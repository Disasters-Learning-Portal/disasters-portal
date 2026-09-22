import type { DataContent } from "@/app/site-config/types";

export const DATA__OPERA_DIST_ALERT_DIST_VEG_ANOM: DataContent = {
  id: "opera-dist-alert-dist-veg-anom",

  contentType: "data",

  title: "OPERA Maximum Vegetation Anomaly (DIST-ALERT VEG-ANOM-MAX)",

  description:
    "The OPERA Land Surface Disturbance Alert (DIST-ALERT) VEG-ANOM-MAX layer reports the maximum observed decrease in vegetation cover relative to a historical baseline using Harmonized Landsat Sentinel-2 observations.",

  thumbnailImage: {
    src: "/img/data/aria-dist-veg-anom.webp",
    alt: "OPERA DIST-ALERT maximum vegetation anomaly imagery",
  },

  mastheadImage: {
    src: "/img/data/aria-dist-veg-anom.webp",
    alt: "OPERA DIST-ALERT maximum vegetation anomaly imagery",
  },

  themes: ["respond", "recover"],

  categories: ["flood", "fire", "severe weather"],

  relatedContent: [
    "aria-dist-veg-status",
    "opera-dist-alert-gen-dist-status",
  ],

  body: [
    {
      type: "text",
      heading: "Summary",
      headingLevel: "h3",
      paragraphs: [
        "The OPERA Land Surface Disturbance Alert (DIST-ALERT) product suite, produced by the Observational Products for End-Users from Remote Sensing Analysis (OPERA) project at NASA's Jet Propulsion Laboratory, maps changes to the land surface using Harmonized Landsat Sentinel-2 (HLS) observations. The VEG-ANOM-MAX layer records the maximum decrease in vegetation cover observed relative to the historical vegetation baseline.",
        "Values range from 0 to 100 and represent the maximum estimated loss of percent vegetation. A value of 0 indicates no detected vegetation loss, while progressively larger values indicate greater vegetation loss. A value of 255 represents no data. The historical baseline is derived from previous HLS observations collected during a comparable seasonal period to account for normal intra-annual vegetation variability.",
      ],
    },

    {
      type: "text",
      heading: "Suggested Use",
      headingLevel: "h3",
      paragraphs: [
        "Use VEG-ANOM-MAX to locate and characterize areas where vegetation cover has decreased following events such as wildfire, flooding, or severe storms. Because the layer expresses vegetation loss as a continuous value from 0 to 100%, users can apply thresholds appropriate to a particular application or level of sensitivity.",
        "VEG-ANOM-MAX represents remotely sensed vegetation change and is not itself a direct measurement of burn severity, structural damage, or another specific hazard impact. Changes may result from multiple causes, so disturbance patterns should be interpreted with event context and corroborated with other observations when used for disaster response.",
      ],
    },

    {
      type: "text",
      heading: "Satellite/Sensor",
      headingLevel: "h3",
      paragraphs: [
        "Harmonized Landsat Sentinel-2 (HLS) surface reflectance observations from Landsat 8 and 9 and the European Space Agency's Copernicus Sentinel-2 satellites",
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
        "NASA Jet Propulsion Laboratory, California Institute of Technology; NASA OPERA; NASA JPL-Caltech ARIA Team; Global Land Analysis and Discovery (GLAD) Laboratory, University of Maryland; USGS; ESA Copernicus; NASA Disasters Program",
      ],
    },

    {
      type: "text",
      heading: "Tags",
      headingLevel: "h3",
      paragraphs: [
        "NASA, OPERA, ARIA, DIST-ALERT, VEG-ANOM-MAX, Vegetation Anomaly, Vegetation Loss, HLS, Harmonized Landsat Sentinel-2, Landsat, Sentinel-2, Surface Disturbance",
      ],
    },
  ],
};
