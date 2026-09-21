import type { DataContent } from "@/app/site-config/types";

export const DATA__OPERA_DIST_ALERT_GEN_DIST_STATUS: DataContent = {
  id: "opera-dist-alert-gen-dist-status",

  contentType: "data",

  title: "OPERA Surface Disturbance Status (DIST-ALERT GEN-DIST-STATUS)",

  description:
    "The OPERA Land Surface Disturbance Alert (DIST-ALERT) GEN-DIST-STATUS layer reports, for every pixel, whether a change to the land surface has been detected and how confident that detection is, from Sentinel-1 radar or Harmonized Landsat Sentinel-2 optical observations compared against a pre-event baseline.",

  thumbnailImage: {
    src: "/img/data/opera-dist-alert-gen-dist-status.webp",
    alt: "OPERA DIST-ALERT disturbance status over the Texas Hill Country after the July 2025 floods",
  },

  mastheadImage: {
    src: "/img/data/opera-dist-alert-gen-dist-status.webp",
    alt: "OPERA DIST-ALERT disturbance status over the Texas Hill Country after the July 2025 floods",
  },

  themes: ["respond", "recover"],

  categories: ["flood", "fire", "severe weather"],

  relatedContent: ["opera-dist-s1"],

  body: [
    {
      type: "text",
      heading: "Summary",
      headingLevel: "h3",
      paragraphs: [
        "The OPERA Land Surface Disturbance Alert (DIST-ALERT) product suite, produced by the Observational Products for End-Users from Remote Sensing Analysis (OPERA) project at NASA's Jet Propulsion Laboratory, maps changes to the land surface by comparing each new satellite observation against a baseline built from observations before the event. The GEN-DIST-STATUS layer is the generic disturbance status: it applies to all land cover types, not just vegetation, and records both whether a disturbance has been detected and how far along the detection is.",
        "Each pixel carries one of nine classes. A value of 0 means no disturbance. Values 1, 2, and 3 are a first detection, a provisional detection confirmed by a second observation, and a confirmed detection, all at low confidence. Values 4, 5, and 6 are the same three stages at high confidence. Values 7 and 8, present in the Harmonized Landsat Sentinel-2 (HLS) product only, mark confirmed low- and high-confidence disturbances that are no longer being detected. Layers are delivered from either the Sentinel-1 radar (DIST-ALERT-S1) or HLS optical (DIST-ALERT-HLS) product depending on the event.",
      ],
    },

    {
      type: "text",
      heading: "Suggested Use",
      headingLevel: "h3",
      paragraphs: [
        "Use GEN-DIST-STATUS to quickly locate areas where the land surface has changed after a flood, fire, or severe storm and to judge how much weight to give each detection. Confirmed high-confidence pixels (value 6) are the strongest signal; first detections (values 1 and 4) have not yet been seen a second time and may be noise. The Sentinel-1 product works through cloud and at night, which matters in the days after a storm, while the HLS product gives a clearer picture once skies are clear.",
        "These are preliminary, unvalidated results intended to support field response and should be corroborated with other information before being used to determine damage at individual properties. On the portal, class 0 is drawn in white and the confidence classes step from pale yellow through orange to dark red; finished classes are grey.",
      ],
    },

    {
      type: "text",
      heading: "Satellite/Sensor",
      headingLevel: "h3",
      paragraphs: [
        "C-band Synthetic Aperture Radar (SAR) on the European Space Agency's Copernicus Sentinel-1 satellites (DIST-ALERT-S1), or the Harmonized Landsat Sentinel-2 (HLS) surface reflectance product from Landsat 8 and 9 and Sentinel-2A, 2B, and 2C (DIST-ALERT-HLS)",
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
        "NASA Jet Propulsion Laboratory, California Institute of Technology; NASA OPERA; ESA Copernicus; USGS; NASA Disasters Program",
      ],
    },

    {
      type: "text",
      heading: "Tags",
      headingLevel: "h3",
      paragraphs: [
        "NASA, OPERA, DIST-ALERT, GEN-DIST-STATUS, Surface Disturbance, Sentinel-1, HLS, Harmonized Landsat Sentinel-2, SAR, Flood, Fire, Severe Weather",
      ],
    },
  ],
};
