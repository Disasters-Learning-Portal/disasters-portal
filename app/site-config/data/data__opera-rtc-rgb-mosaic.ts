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

  body: [
    {
      type: "text",
      heading: "Summary",
      headingLevel: "h3",
      paragraphs: [
        "The OPERA Radiometric Terrain-Corrected SAR Backscatter product (RTC-S1) is generated from Sentinel-1 synthetic aperture radar observations and normalized with respect to topography. The RTC RGB Mosaic is a false-color visualization derived from mosaicked RTC-S1 backscatter data and designed to make spatial patterns in radar backscatter easier to interpret during disaster events.",
        "Because the product is based on radar observations, it can provide useful information day or night and through cloud cover, smoke, and many weather conditions that can obscure optical imagery. In this color rendering, vegetated areas often appear green, urban areas may appear white or pink, calm water commonly appears dark, and rougher water or areas of higher backscatter may appear purple or magenta.",
      ],
    },

    {
      type: "text",
      heading: "Suggested Use",
      headingLevel: "h3",
      paragraphs: [
        "Use the RTC RGB Mosaic for rapid visual situational awareness and interpretation of land and water surface conditions during floods, tropical cyclones, severe weather, wildfires, and other disasters. The false-color composite can help distinguish broad surface types and reveal spatial patterns in inundation, roughness, vegetation, and built environments.",
        "The RTC RGB Mosaic is primarily a visualization product and should be interpreted qualitatively. Color differences reflect variations in radar backscatter and are influenced by surface roughness, moisture, vegetation structure, viewing geometry, and other physical factors. The product is best used alongside other OPERA products, such as DIST-S1 or water extent products, when making hazard-specific assessments.",
      ],
    },

    {
      type: "text",
      heading: "Satellite/Sensor",
      headingLevel: "h3",
      paragraphs: [
        "C-band Synthetic Aperture Radar (SAR) aboard the European Space Agency's Copernicus Sentinel-1 satellites",
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
      paragraphs: [
        "NASA Jet Propulsion Laboratory, California Institute of Technology; NASA OPERA; ESA Copernicus; NASA Disasters Program",
      ],
    },

    {
      type: "text",
      heading: "Tags",
      headingLevel: "h3",
      paragraphs: [
        "NASA, OPERA, RTC, RTC-S1, Radiometric Terrain Correction, Sentinel-1, SAR, Synthetic Aperture Radar, RGB Mosaic, Backscatter, Flood, Tropical Cyclone, Fire, Severe Weather",
      ],
    },
  ],
};