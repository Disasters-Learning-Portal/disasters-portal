import type { DataContent } from "@/app/site-config/types";

export const DATA__UAVSAR_RGB: DataContent = {
  id: "uavsar-rgb",

  contentType: "data",

  title: "UAVSAR Polarimetric False Color Imagery",

  description:
    "Fully polarimetric L-band radar imagery from NASA's airborne UAVSAR instrument, rendered as a false color composite of the HH, HV, and VV polarization channels to reveal flooding and inundation beneath tree canopy that optical imagery cannot see.",

  thumbnailImage: {
    src: "/img/data/uavsar-rgb.webp",
    alt: "UAVSAR false color polarimetric radar swaths over central Florida collected October 14, 2024, with vegetation in green, inundated vegetation in pink, and smooth surfaces and open water in black",
  },

  mastheadImage: {
    src: "/img/data/uavsar-rgb.webp",
    alt: "UAVSAR false color polarimetric radar swaths over central Florida collected October 14, 2024, with vegetation in green, inundated vegetation in pink, and smooth surfaces and open water in black",
  },

  themes: ["respond", "recover"],

  categories: ["flood", "tropical cyclone", "severe weather"],

  relatedContent: ["uavsar-unet-classified", "uavsar-quicklook-classified", "uavsar-displacement"],

  body: [
    {
      type: "text",
      heading: "Summary",
      headingLevel: "h3",
      paragraphs: [
        "The Uninhabited Aerial Vehicle Synthetic Aperture Radar (UAVSAR) is a fully polarimetric L-band radar flown aboard a NASA Gulfstream III aircraft. Because L-band radar uses a comparatively long wavelength, the signal penetrates vegetation canopy and returns from the forest floor, which allows UAVSAR to detect standing water in places where optical sensors see only treetops.",
        "This product overlays the intensities of the three polarization channels as a false color composite, which lets an analyst visually separate a scene by its dominant backscattering mechanism. Surface scattering produces strong HH and VV returns, volume scattering produces strong HV returns, and double-bounce scattering produces strong HH returns. Areas dominated by green (HV) intensity are typically vegetated. Areas dominated by shades of pink (HH+HV) are typically inundated forests or flooded vegetated fields. Black and dark grey areas are smooth surfaces such as roads, open water, and smooth bare ground where very little energy scatters back to the radar.",
      ],
    },

    {
      type: "text",
      heading: "Suggested Use",
      headingLevel: "h3",
      paragraphs: [
        "Use this composite to map inundation extent in vegetated regions where the ground is not visible in optical imagery. Open water reads as dark blue to black, and inundation under tree canopy reads in pink tones, so the two can be distinguished within a single scene without a separate pre-event image.",
        "This is the unclassified source imagery behind the UAVSAR flood classification products. Analysts who want the radar signal itself, rather than a machine learning interpretation of it, should start here, and should consult the classified products when a labeled flood extent is needed. Because the composite is a qualitative rendering of backscatter intensity, colors should be interpreted alongside local land cover knowledge rather than read as absolute surface classes.",
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
        "Airborne collection over an approximately 22 kilometer swath, delivered as geocoded imagery; available as individual flight lines and as multi-flight composites",
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
        "NASA, JPL, UAVSAR, SAR, Synthetic Aperture Radar, L-band, Polarimetry, Quad-Pol, False Color, Flood, Inundation, Under Canopy Flooding, Airborne, Disaster Response",
      ],
    },
  ],
};
