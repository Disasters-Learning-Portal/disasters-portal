import type { DataContent } from "@/app/site-config/types";

export const DATA__SENTINEL_2_COLOR_INFRARED: DataContent = {
  id: "sentinel-2-color-infrared",

  contentType: "data",

  title: "Sentinel-2 Color Infrared Imagery",

  description:
    "Created using near-infrared, red, and green channels to highlight vegetation, water, burned areas, and other surface changes associated with floods, fires, and other hazards.",

  thumbnailImage: {
    src: "/img/data/sentinel-2-color-infrared.webp",
    alt: "Sentinel-2 Color Infrared imagery example",
  },

  mastheadImage: {
    src: "/img/data/sentinel-2-color-infrared.webp",
    alt: "Sentinel-2 Color Infrared imagery example",
  },
  themes: ["prepare", "respond", "recover", "resilience"],
  categories: [
    "severe weather",
    "fire",
    "heat",
    "flood",
    "tropical cyclone",
    "earthquake",
    "winter weather",
  ],

  relatedContent: ["sentinel-2-true-color", "sentinel-2-swir"],

  exploreDataUrl:
    "https://science-dev.data.nasa.gov/disasters/data-visualization/?mission=disasters_learning_portal&mapLon=-100.54451251907628&mapLat=31.572275524042684&mapZoom=8.5&globeLon=undefined&globeLat=undefined&panePercents=0,100,0&on=262ae0be-0753-40b0-8c58-62ca457eeb02$1.00&startTime=2012-01-19T00:00:00.000Z&endTime=2025-07-10T23:59:59.000Z&live=0",

  body: [
    {
      type: "text",
      heading: "Summary",
      paragraphs: [
        "The Color Infrared composite is created using the near-infrared, red, and green channels, which provide stronger contrast among vegetation, water, exposed surfaces, and areas affected by hazards than visible imagery alone. Healthy vegetation typically appears red, water appears dark blue to black, and burned or sparsely vegetated areas often appear dark or muted. Near-infrared observations can provide useful surface information under some light haze or thin cloud conditions, but they do not penetrate thick cloud or dense smoke.",
      ],
    },

    {
      type: "text",
      heading: "Suggested Use",
      paragraphs: [
        "Sentinel-2 Color Infrared imagery can be used to distinguish healthy vegetation from stressed or burned vegetation, identify water and inundated areas, and assess surface changes associated with wildfires, floods, severe weather, and other hazards. Near-infrared observations provide greater contrast between vegetation, water, and exposed surfaces than visible imagery alone, making the composite useful for comparing pre- and post-event conditions.",
        "Because Sentinel-2 is an optical sensor, clouds, cloud shadows, heavy smoke, haze, and other atmospheric conditions may obscure or alter the appearance of the surface. Color Infrared imagery should therefore be interpreted alongside acquisition conditions and, where possible, complementary observations from other sensors.",
      ],
    },

    {
      type: "text",
      heading: "Terms of Use",
      paragraphs: [
        "NASA data and products are freely available to federal, state, public, non-profit and commercial users. This information can be experimental- or research-grade data products and may not be appropriate for operational use. These NASA data products, services, and the Disasters Mapping Portal are intended to aid decision makers and enhance situational awareness, but these data are not guaranteed to be consistently available or routinely updated. Use of this product should include: 'The product contains modified Copernicus Sentinel-2, processed by the European Space Agency.'",
      ],
    },

    {
      type: "text",
      heading: "Satellite/Sensor",
      paragraphs: [
        "MultiSpectral Instrument (MSI) aboard the European Space Agency's Copernicus Sentinel-2 satellites",
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
        "NASA/GSFC; USGS; ESA Copernicus",
        "The product contains modified Copernicus Sentinel-2, processed by the European Space Agency.",
      ],
    },

    {
      type: "text",
      heading: "Tags",
      paragraphs: [
        "ESA, Copernicus, Sentinel-2, MSI, Optical, Color Infrared, Near Infrared, Vegetation, Flood, Wildfire",
      ],
    },
  ],
};
