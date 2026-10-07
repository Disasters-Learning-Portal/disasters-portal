import { DATA_VISUALIZATION_URL } from "@/app/site-config/env.helpers";
import type { DataContent } from "@/app/site-config/types";

export const DATA__SENTINEL_2_TRUE_COLOR: DataContent = {
  id: "sentinel-2-true-color",

  contentType: "data",

  title: "Sentinel-2 True Color Imagery",

  description:
    "A visible-light composite created from Sentinel-2 red, green, and blue observations to show the Earth's surface approximately as it would appear to the human eye from space.",

  thumbnailImage: {
    src: "/img/data/sentinel-2-true-color.webp",
    alt: "Sentinel-2 True Color imagery example",
  },

  mastheadImage: {
    src: "/img/data/sentinel-2-true-color.webp",
    alt: "Sentinel-2 True Color imagery example",
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

  relatedContent: ["sentinel-2-color-infrared", "sentinel-2-swir"],

  exploreDataUrl: `${DATA_VISUALIZATION_URL}/?mapLon=-89.945068359375&mapLat=33.8370909521543&mapZoom=6.73&globeLon=undefined&globeLat=undefined&panePercents=0,100,0&on=f8b7885c-2048-4957-9c44-04132b5126f5$1.00&startTime=2012-01-19T00:00:00.000Z&endTime=2026-01-29T23:59:59.000Z&live=0`,

  body: [
    {
      type: "text",
      heading: "Summary",
      paragraphs: [
        "Sentinel-2 True Color imagery is created from the red, green, and blue visible wavelength bands measured by the MultiSpectral Instrument (MSI). The composite provides an intuitive view of surface conditions approximately as they would appear to the human eye from space, making it useful for visually comparing landscapes before, during, and after natural hazards.",
      ],
    },

    {
      type: "text",
      heading: "Suggested Use",
      paragraphs: [
        "Sentinel-2 True Color imagery can be used for visual interpretation of surface conditions before, during, and after natural hazards. The imagery can support assessment of wildfire impacts, flooding, storm damage, changes to vegetation and land cover, and other visible surface changes. Comparing imagery from different dates can help identify areas affected by an event and provide context for interpreting more specialized spectral or radar products.",
        "Because the composite uses visible wavelengths, clouds, smoke, haze, and other atmospheric conditions may obscure or alter the appearance of the land surface. True Color imagery is therefore best used alongside acquisition information and complementary products when surface conditions are partially obscured.",
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
      paragraphs: ["10 meters"],
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
        "ESA, Copernicus, Sentinel-2, MSI, Optical, True Color, RGB, Visible Imagery, Wildfire, Flood, Severe Weather",
      ],
    },
  ],
};
