import type { DataContent } from "@/app/site-config/types";

export const DATA__SENTINEL_2_SWIR: DataContent = {
  id: "sentinel-2-swir",

  contentType: "data",

  title: "Sentinel-2 Shortwave Infrared Imagery",

  description:
    "A false color composite created from Sentinel-2 shortwave infrared, near-infrared, and red observations to highlight differences among water, vegetation, burned areas, snow, bare ground, and developed surfaces.",

  thumbnailImage: {
    src: "/img/data/sentinel-2-swir.webp",
    alt: "Sentinel-2 Shortwave Infrared imagery example",
  },

  mastheadImage: {
    src: "/img/data/sentinel-2-swir.webp",
    alt: "Sentinel-2 Shortwave Infrared imagery example",
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

  relatedContent: ["sentinel-2-true-color", "sentinel-2-color-infrared"],

  exploreDataUrl:
    "https://science-dev.data.nasa.gov/disasters/data-visualization/?mission=disasters_learning_portal&mapLon=-89.9560546875&mapLat=33.827635490105436&mapZoom=6.72&globeLon=undefined&globeLat=undefined&panePercents=0,100,0&on=107a6a84-7738-4060-a900-c2514a11dce5$1.00&startTime=2012-01-19T00:00:00.000Z&endTime=2026-01-29T23:59:59.000Z&live=0",

  body: [
    {
      type: "text",
      heading: "Summary",
      paragraphs: [
        "Sentinel-2 Shortwave Infrared imagery highlights differences in surface reflectance at shortwave infrared wavelengths. This false color composite is created using shortwave infrared (SWIR), near-infrared (NIR), and red observations from the Sentinel-2 MultiSpectral Instrument (MSI). These wavelengths provide strong contrast among water, vegetation, burned surfaces, snow, bare ground, and developed areas, making the composite useful for examining a range of surface changes associated with natural hazards.",
        "In this rendering, water generally appears blue to dark blue, healthy vegetation appears green, developed areas often appear purple or magenta, and snow may appear bright blue or cyan. Bare soils and burned surfaces can vary in color depending on their composition and condition.",
      ],
    },

    {
      type: "text",
      heading: "Suggested Use",
      paragraphs: [
        "Sentinel-2 Shortwave Infrared imagery can be used to identify water and potential inundation, distinguish vegetation from exposed or developed surfaces, and detect fire-related changes such as burn scars. Comparing imagery collected before and after an event can help identify areas affected by flooding, wildfire, severe weather, tropical cyclones, and other hazards. The strong contrast between water and surrounding land surfaces makes the composite especially useful for flood assessment, while the sensitivity of SWIR wavelengths to vegetation condition and surface moisture also supports post-fire analysis.",
        "Because Sentinel-2 is an optical sensor, clouds, cloud shadows, heavy smoke, haze, and other atmospheric conditions can obscure or alter the appearance of the surface. Color also depends on the selected band combination and rendering, so individual colors should be interpreted as qualitative indicators rather than fixed surface classifications. Results are best considered alongside true color imagery, other spectral products, and available event information.",
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
        "MultiSpectral Instrument (MSI) aboard the European Space Agency's Copernicus Sentinel-2A, Sentinel-2B, and Sentinel-2C satellites",
      ],
    },

    {
      type: "text",
      heading: "Resolution",
      paragraphs: ["20 meters"],
    },

    {
      type: "text",
      heading: "Credits",
      paragraphs: [
        "NASA/GSFC, USGS, ESA Copernicus",
        "The product contains modified Copernicus Sentinel-2, processed by the European Space Agency.",
      ],
    },

    {
      type: "text",
      heading: "Tags",
      paragraphs: [
        "ESA, Copernicus, Sentinel-2, MSI, Optical, Shortwave Infrared, SWIR, Near Infrared, Flood, Inundation, Burn Scar, Wildfire",
      ],
    },
  ],
};
