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

  themes: ["respond", "resilience", "prepare", "recover"],

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

  exploreDataUrl:
    "https://science-dev.data.nasa.gov/disasters/data-visualization/?mission=disasters_learning_portal&mapLon=-88.9013671875&mapLat=34.574129648298324&mapZoom=6.41&globeLon=undefined&globeLat=undefined&panePercents=0,100,0&on=432bcfed-b567-4cae-ac73-e4d5a680eadc$1.00&startTime=2012-01-19T00:00:00.000Z&endTime=2026-01-28T23:59:59.000Z&live=0",

  body: [
    {
      type: "text",
      heading: "Summary",
      paragraphs: [
        "The Landsat True Color RGB composite provides a natural-looking representation of the Earth's surface using the red, green, and blue visible wavelength bands. For Landsat 8 and Landsat 9, the composite is created using Operational Land Imager (OLI) Bands 4, 3, and 2 for red, green, and blue, respectively.",
      ],
    },

    {
      type: "text",
      heading: "Suggested Use",
      paragraphs: [
        "Landsat True Color imagery can be used for visual interpretation of surface conditions before, during, and after natural hazards. The imagery can support assessment of wildfire impacts, flooding, storm damage, changes to vegetation and land cover, and other visible surface changes. Because the composite uses visible wavelengths, clouds, smoke, haze, and atmospheric conditions may obscure the land surface.",
      ],
    },

    {
      type: "text",
      heading: "Terms of Use",
      paragraphs: [
        "NASA data and products are freely available to federal, state, public, non-profit and commercial users. This information can be experimental- or research-grade data products and may not be appropriate for operational use. These NASA data products, services, and the Disasters Mapping Portal are intended to aid decision makers and enhance situational awareness, but these data are not guaranteed to be consistently available or routinely updated.",
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
      paragraphs: ["NASA, USGS, Landsat, Landsat 8, Landsat 9, OLI, OLI-2, True Color, Optical"],
    },
  ],
};
