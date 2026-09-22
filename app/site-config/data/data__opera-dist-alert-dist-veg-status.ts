import type { DataContent } from "@/app/site-config/types";

export const DATA__OPERA_DIST_ALERT_DIST_VEG_STATUS: DataContent = {
  id: "opera-dist-alert-dist-veg-status",

  contentType: "data",

  title: "OPERA Vegetation Disturbance Status (DIST-ALERT VEG-DIST-STATUS)",

  description:
    "The OPERA Land Surface Disturbance Alert (DIST-ALERT) VEG-DIST-STATUS layer identifies vegetation disturbance, its detection stage, and whether the maximum observed vegetation loss is below or at least 50%.",

  thumbnailImage: {
    src: "/img/data/opera-dist-alert-dist-veg-status.webp",
    alt: "OPERA DIST-ALERT vegetation disturbance status imagery",
  },

  mastheadImage: {
    src: "/img/data/opera-dist-alert-dist-veg-status.webp",
    alt: "OPERA DIST-ALERT vegetation disturbance status imagery",
  },

  themes: ["respond", "recover"],

  categories: ["flood", "fire", "severe weather"],

  relatedContent: ["aria-dist-veg-anom", "opera-dist-alert-gen-dist-status"],

  body: [
    {
      type: "text",
      heading: "Summary",
      headingLevel: "h3",
      paragraphs: [
        "The OPERA Land Surface Disturbance Alert (DIST-ALERT) VEG-DIST-STATUS layer identifies vegetation cover loss detected from Harmonized Landsat Sentinel-2 observations and reports the status of that disturbance through time. The status combines the magnitude of the maximum vegetation anomaly, the confidence of the detection, and whether the disturbance remains ongoing or has finished.",
        "A value of 0 indicates no disturbance. Values 1, 2, and 3 represent first, provisional, and confirmed vegetation disturbance with less than 50% maximum vegetation loss. Values 4, 5, and 6 represent the same detection stages where maximum vegetation loss is at least 50%. Values 7 and 8 indicate confirmed disturbances below and above the 50% threshold, respectively, that are considered finished. A value of 255 represents no data.",
      ],
    },

    {
      type: "text",
      heading: "Suggested Use",
      headingLevel: "h3",
      paragraphs: [
        "Use VEG-DIST-STATUS to identify areas of vegetation disturbance and determine how strongly the available observation history supports each detection. A first detection indicates that an anomaly has been observed but no subsequent observation is yet available. A provisional disturbance has been detected in two consecutive observations but has not yet reached the confidence required for confirmation. Confirmed pixels represent vegetation disturbance detected with high confidence.",
        "The less-than-50% and at-least-50% classes refer to the magnitude of maximum vegetation loss, not to detection confidence. Finished classes identify previously confirmed disturbances for which subsequent observations no longer show an anomaly. The product is intended to support rapid situational awareness and should be interpreted together with other event information before attributing the detected vegetation change to a specific hazard or impact.",
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
        "NASA, OPERA, ARIA, DIST-ALERT, VEG-DIST-STATUS, Vegetation Disturbance, Vegetation Loss, HLS, Harmonized Landsat Sentinel-2, Landsat, Sentinel-2, Surface Disturbance",
      ],
    },
  ],
};
