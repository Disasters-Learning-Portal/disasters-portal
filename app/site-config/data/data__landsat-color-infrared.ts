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

  relatedContent: ["landsat-color-infrared", "landsat-true-color", "sentinel-2-color-infrared"],

  exploreDataUrl:
    "https://science-dev.data.nasa.gov/disasters/data-visualization/?mission=disasters_learning_portal&mapLon=-86.396484375&mapLat=38.18151643565807&mapZoom=7.49&globeLon=undefined&globeLat=undefined&panePercents=0,100,0&on=5200732f-7393-4287-8794-34baa143a8dd$1.00&startTime=2012-01-19T00:00:00.000Z&endTime=2025-02-19T23:59:59.000Z&live=0",

  body: [
    {
      type: "text",
      heading: "Summary",
      paragraphs: [
        "The Landsat Color Infrared composite is created using the near-infrared, red, and green wavelength bands. For Landsat 8 and Landsat 9, the composite uses Operational Land Imager (OLI) Bands 5, 4, and 3. Healthy vegetation generally appears red because vegetation strongly reflects near-infrared radiation, while water typically appears dark blue to black and burned or sparsely vegetated areas appear darker brown or gray.",
      ],
    },

    {
      type: "text",
      heading: "Suggested Use",
      paragraphs: [
        "Landsat Color Infrared imagery can be used to distinguish healthy vegetation from stressed or burned vegetation, identify water and inundated areas, and assess surface changes associated with wildfires, floods, severe weather, and other hazards. Near-infrared observations provide greater contrast between vegetation, water, and exposed surfaces than visible imagery alone, although clouds, heavy smoke, and atmospheric conditions may still obscure the surface.",
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
      paragraphs: [
        "NASA, USGS, Landsat, Landsat 8, Landsat 9, OLI, OLI-2, Color Infrared, Near Infrared, Optical",
      ],
    },
  ],
};
