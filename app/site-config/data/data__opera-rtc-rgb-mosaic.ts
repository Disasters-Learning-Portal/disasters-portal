import type { DataContent } from "@/app/site-config/types";

export const DATA__OPERA_RTC_RGB_MOSAIC: DataContent = {
  id: "opera-rtc-rgb-mosaic",

  contentType: "data",

  title: "OPERA RTC RGB Mosaic",

  description:
    "The OPERA RTC RGB Mosaic is a false-color mosaic derived from radiometrically terrain-corrected Sentinel-1 radar backscatter and designed to support rapid visual interpretation of land and water surface conditions during disasters.",

  thumbnailImage: {
    src: "/img/data/opera-rtc-rgb-mosaic.webp",
    alt: "OPERA RTC RGB mosaic imagery",
  },

  mastheadImage: {
    src: "/img/data/opera-rtc-rgb-mosaic.webp",
    alt: "OPERA RTC RGB mosaic imagery",
  },

  themes: ["respond", "recover"],

  categories: ["flood", "fire", "severe weather", "tropical cyclone"],

  relatedContent: ["opera-dist-s1", "opera-dist-alert-gen-dist-status"],

  exploreDataUrl:
    "https://science-dev.data.nasa.gov/disasters/data-visualization/?mission=disasters_learning_portal&mapLon=-83.46002289639685&mapLat=28.563786266748693&mapZoom=6.79&globeLon=undefined&globeLat=undefined&panePercents=0,100,0&on=a2a2990b-8d26-4c06-b891-506f910fb5ec$1.00&startTime=2012-01-19T00:00:00.000Z&endTime=2024-09-26T23:59:59.000Z&live=0",

  body: [
    {
      type: "text",
      heading: "Summary",
      paragraphs: [
        "The OPERA Radiometric Terrain-Corrected SAR Backscatter product (RTC-S1) is generated from Sentinel-1 synthetic aperture radar observations and normalized with respect to topography. The RTC RGB Mosaic is a false-color visualization derived from mosaicked RTC-S1 backscatter data and designed to make spatial patterns in radar backscatter easier to interpret during disaster events.",
        "Because the product is based on radar observations, it can provide useful information day or night and through cloud cover, smoke, and many weather conditions that can obscure optical imagery. In this color rendering, vegetated areas often appear green, urban areas may appear white or pink, calm water commonly appears dark, and rougher water or areas of higher backscatter may appear purple or magenta.",
      ],
    },

    {
      type: "text",
      heading: "Suggested Use",
      paragraphs: [
        "Use the RTC RGB Mosaic for rapid visual situational awareness and interpretation of land and water surface conditions during floods, tropical cyclones, severe weather, wildfires, and other disasters. The false-color composite can help distinguish broad surface types and reveal spatial patterns in inundation, roughness, vegetation, and built environments.",
        "The RTC RGB Mosaic is primarily a visualization product and should be interpreted qualitatively. Color differences reflect variations in radar backscatter and are influenced by surface roughness, moisture, vegetation structure, viewing geometry, and other physical factors. The product is best used alongside other OPERA products, such as DIST-S1 or water extent products, when making hazard-specific assessments.",
      ],
    },

    {
      type: "text",
      heading: "Terms of Use",
      paragraphs: [
        "NASA data and products are freely available to federal, state, public, non-profit and commercial users. This information can be experimental- or research-grade data products and may not be appropriate for operational use. These NASA data products, services, and the Disasters Mapping Portal are intended to aid decision makers and enhance situational awareness, but these data are not guaranteed to be consistently available or routinely updated. Use of this product should include: 'Contains modified Copernicus Sentinel data (2026) processed by ESA.'",
      ],
    },

    {
      type: "text",
      heading: "Satellite/Sensor",
      paragraphs: [
        "C-band Synthetic Aperture Radar (SAR) aboard the European Space Agency's Copernicus Sentinel-1 satellites",
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
      paragraphs: [
        "NASA Jet Propulsion Laboratory, California Institute of Technology; NASA OPERA; ESA Copernicus; NASA Disasters Program",
        "Use of this product should include: “The product contains modified Copernicus Sentinel-1 data, processed by the European Space Agency and NASA.”",
      ],
    },

    {
      type: "text",
      heading: "Tags",
      paragraphs: [
        "NASA, OPERA, RTC, RTC-S1, Radiometric Terrain Correction, Sentinel-1, SAR, Synthetic Aperture Radar, RGB Mosaic, Backscatter, Flood, Tropical Cyclone, Fire, Severe Weather",
      ],
    },
  ],
};
