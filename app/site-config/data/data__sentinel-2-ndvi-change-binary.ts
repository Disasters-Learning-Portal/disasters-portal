import type { DataContent } from "@/app/site-config/types";

export const DATA__SENTINEL_2_NDVI_CHANGE_BINARY: DataContent = {
  id: "sentinel-2-ndvi-change-binary",

  contentType: "data",

  title: "Sentinel-2 Binary NDVI Change",

  description:
    "Binary vegetation change derived from Sentinel-2 Normalized Difference Vegetation Index (NDVI), identifying locations where NDVI decreased by 0.25 or more between two observation dates.",

  thumbnailImage: {
    src: "/img/data/sentinel-2-ndvi-change-binary.webp",
    alt: "Sentinel-2 binary Normalized Difference Vegetation Index change imagery highlighting areas with substantial vegetation decrease",
  },

  mastheadImage: {
    src: "/img/data/sentinel-2-ndvi-change-binary.webp",
    alt: "Sentinel-2 binary Normalized Difference Vegetation Index change imagery highlighting areas with substantial vegetation decrease",
  },

  themes: ["respond", "prepare"],

  categories: [
    "severe weather",
    "fire",
    "heat",
    "flood",
    "tropical cyclone",
    "earthquake",
    "winter weather",
  ],

  relatedContent: [
    "sentinel-2-ndvi",
    "sentinel-2-true-color",
    "landsat-ndvi",
    "landsat-true-color",
    "planet-ndvi",
    "planet-true-color",
  ],

  exploreDataUrl:
    "https://science-dev.data.nasa.gov/disasters/data-visualization/?mission=disasters_learning_portal&mapLon=-83.47412109375&mapLat=29.778347928476194&mapZoom=8.46&globeLon=undefined&globeLat=undefined&panePercents=0,100,0&on=b6b67076-1527-4335-b22a-8e4d084dba01$1.00&startTime=2012-01-19T00:00:00.000Z&endTime=2024-10-12T23:59:59.000Z&live=0",

  body: [
    {
      type: "text",
      heading: "Summary",
      paragraphs: [
        "Sentinel-2 Binary NDVI Change is derived by comparing Normalized Difference Vegetation Index (NDVI) values from two observation dates. NDVI is calculated as (NIR - Red)/(NIR + Red), using near-infrared and visible red reflectance from the Sentinel-2 MultiSpectral Instrument (MSI). This product applies a threshold to the NDVI difference and identifies pixels where NDVI decreased by 0.25 or more between the two observations. It therefore highlights substantial vegetation loss or disturbance rather than displaying the full range of positive and negative NDVI change.",
      ],
    },

    {
      type: "text",
      heading: "Suggested Use",
      paragraphs: [
        "Sentinel-2 Binary NDVI Change can be used to rapidly identify areas with substantial decreases in vegetation condition following wildfire, flooding, severe weather, tropical cyclones, heat or drought stress, and other disturbances. The binary classification simplifies interpretation by highlighting only locations that meet the NDVI decrease threshold of -0.25 or lower.",
        "Because this product records only whether the decrease threshold is met, it does not show the magnitude of NDVI change beyond that threshold and does not identify vegetation increases or recovery. It should therefore be used for disturbance detection rather than vegetation recovery monitoring. Differences in seasonality, phenology, soil moisture, atmospheric conditions, acquisition geometry, clouds, smoke, and the choice of pre- and post-event imagery can also affect whether a pixel crosses the threshold, so results should be interpreted alongside other imagery and environmental information.",
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
        "NASA/GSFC, USGS, ESA Copernicus, NASA Disasters Program",
        "The product contains modified Copernicus Sentinel-2, processed by the European Space Agency.",
      ],
    },

    {
      type: "text",
      heading: "Tags",
      paragraphs: [
        "NASA, ESA, Copernicus, Sentinel-2, MSI, NDVI, Binary NDVI Change, Normalized Difference Vegetation Index, Vegetation Disturbance, Vegetation Loss, Optical",
      ],
    },
  ],
};
