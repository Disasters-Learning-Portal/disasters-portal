import type { DataContent } from "@/app/site-config/types";

export const DATA__UAVSAR_UNET_CLASSIFIED_GRAYSCALE: DataContent = {
  id: "uavsar-unet-classified-grayscale",

  contentType: "data",

  title: "UAVSAR U-Net Flood Classification (Grayscale)",

  description:
    "A single-band grayscale rendering of the UAVSAR U-Net flood classification, intended for use as an analysis-ready input layer or as a neutral underlay beneath other thematic map layers.",

  thumbnailImage: {
    src: "/img/data/uavsar-unet-classified-grayscale.webp",
    alt: "UAVSAR U-Net flood classification over central Texas from July 2025, shown here in the color rendering while the grayscale source imagery is unavailable",
  },

  mastheadImage: {
    src: "/img/data/uavsar-unet-classified-grayscale.webp",
    alt: "UAVSAR U-Net flood classification over central Texas from July 2025, shown here in the color rendering while the grayscale source imagery is unavailable",
  },

  themes: ["respond", "recover"],

  categories: ["flood", "tropical cyclone", "severe weather"],

  relatedContent: ["uavsar-unet-classified", "uavsar-rgb", "uavsar-quicklook-classified"],

  body: [
    {
      type: "text",
      heading: "Summary",
      headingLevel: "h3",
      paragraphs: [
        "This product carries the same U-Net machine learning flood classification as the standard UAVSAR U-Net product, delivered as a single-band grayscale raster rather than a color-coded one. The underlying classification is identical: a U-Net algorithm trained on UAVSAR data from previous flood events identifies open water flooding and inundation beneath tree canopy from the polarimetric radar signal.",
        "The grayscale rendering exists so the layer can be consumed as an analysis-ready input, combined with other datasets, or placed underneath thematic layers without its own color scheme competing with them. Where the color product encodes flooded land cover type as hue, this version carries the classification as pixel value.",
      ],
    },

    {
      type: "text",
      heading: "Suggested Use",
      headingLevel: "h3",
      paragraphs: [
        "Use this version when the classification is being fed into further analysis, when it needs to be styled with a custom color ramp, or when it serves as a backdrop for other map layers whose symbology should dominate. For visual interpretation and for communicating flood extent to non-specialist audiences, the color-coded UAVSAR U-Net Flood Classification is the better starting point because it labels the type of land cover that was flooded.",
        "The limitations of the source classification carry over in full. Strong double-bounce scattering from urban areas aligned with the radar viewing direction can produce erroneous flood detections, and results depend on the land cover types represented in the training data, so detections should be corroborated before being treated as confirmed.",
      ],
    },

    {
      type: "text",
      heading: "Satellite/Sensor",
      headingLevel: "h3",
      paragraphs: [
        "Uninhabited Aerial Vehicle Synthetic Aperture Radar (UAVSAR), an L-band fully polarimetric synthetic aperture radar flown on a NASA Gulfstream III (C-20A) aircraft and operated by NASA's Jet Propulsion Laboratory",
      ],
    },

    {
      type: "text",
      heading: "Resolution",
      headingLevel: "h3",
      paragraphs: [
        "Airborne collection over an approximately 22 kilometer swath, delivered as a geocoded single-band composite",
      ],
    },

    {
      type: "text",
      heading: "Credits",
      headingLevel: "h3",
      paragraphs: [
        "NASA Jet Propulsion Laboratory (JPL) UAVSAR team and the NASA Disasters Program",
      ],
    },

    {
      type: "text",
      heading: "Tags",
      headingLevel: "h3",
      paragraphs: [
        "NASA, JPL, UAVSAR, SAR, Synthetic Aperture Radar, L-band, Machine Learning, U-Net, Classification, Grayscale, Flood, Inundation, Under Canopy Flooding, Airborne, Disaster Response",
      ],
    },
  ],
};
