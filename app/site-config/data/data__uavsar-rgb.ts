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

  exploreDataUrl:
    "https://science-dev.data.nasa.gov/disasters/data-visualization/?mission=disasters_learning_portal&mapLon=-81.749267578125&mapLat=28.415290272427438&mapZoom=7.68&globeLon=undefined&globeLat=undefined&panePercents=0,100,0&on=cedd8705-7de2-4efb-a638-83a9a232b97d$1.00&startTime=2012-01-19T00:00:00.000Z&endTime=2024-10-14T23:59:59.000Z&live=0",

  body: [
    {
      type: "text",
      heading: "Summary",
      paragraphs: [
        "The Uninhabited Aerial Vehicle Synthetic Aperture Radar (UAVSAR) is a fully polarimetric L-band radar flown aboard a NASA Gulfstream III aircraft. Because L-band radar uses a comparatively long wavelength, the signal penetrates vegetation canopy and returns from the forest floor, which allows UAVSAR to detect standing water in places where optical sensors see only treetops.",
        "This product overlays the intensities of the three polarization channels as a false color composite, which lets an analyst visually separate a scene by its dominant backscattering mechanism. Surface scattering produces strong HH and VV returns, volume scattering produces strong HV returns, and double-bounce scattering produces strong HH returns. Areas dominated by green (HV) intensity are typically vegetated. Areas dominated by shades of pink (HH+HV) are typically inundated forests or flooded vegetated fields. Black and dark grey areas are smooth surfaces such as roads, open water, and smooth bare ground where very little energy scatters back to the radar.",
      ],
    },

    {
      type: "text",
      heading: "Suggested Use",
      paragraphs: [
        "Use this composite to map inundation extent in vegetated regions where the ground is not visible in optical imagery. Open water reads as dark blue to black, and inundation under tree canopy reads in pink tones, so the two can be distinguished within a single scene without a separate pre-event image.",
        "This is the unclassified source imagery behind the UAVSAR flood classification products. Analysts who want the radar signal itself, rather than a machine learning interpretation of it, should start here, and should consult the classified products when a labeled flood extent is needed. Because the composite is a qualitative rendering of backscatter intensity, colors should be interpreted alongside local land cover knowledge rather than read as absolute surface classes.",
      ],
    },

    {
      type: "text",
      heading: "Terms of Use",
      paragraphs: [
        "NASA data and products are freely available to federal, state, public, non-profit and commercial users. This information can be experimental- or research-grade data products and may not be appropriate for operational use. These NASA data products, services, and the Disasters Mapping Portal are intended to aid decision makers and enhance situational awareness, but these data are not guaranteed to be consistently available or routinely updated.",
      ],
    },

    {
      type: "text",
      heading: "Satellite/Sensor",
      paragraphs: [
        "Uninhabited Aerial Vehicle Synthetic Aperture Radar (UAVSAR), an L-band fully polarimetric synthetic aperture radar flown on a NASA Gulfstream III (C-20A) aircraft and operated by NASA's Jet Propulsion Laboratory",
      ],
    },

    {
      type: "text",
      heading: "Resolution",
      paragraphs: [
        "6 meter spatial resolution. UAVSAR observations are collected in approximately 22-kilometer-wide airborne swaths and delivered as geocoded imagery, including individual flight lines and multi-flight composites.",
      ],
    },

    {
      type: "text",
      heading: "Credits",
      paragraphs: [
        "NASA Jet Propulsion Laboratory (JPL) UAVSAR team and the NASA Disasters Program",
      ],
    },

    {
      type: "text",
      heading: "Tags",
      paragraphs: [
        "NASA, JPL, UAVSAR, SAR, Synthetic Aperture Radar, L-band, Polarimetry, Quad-Pol, False Color, Flood, Inundation, Under Canopy Flooding, Airborne, Disaster Response",
      ],
    },
  ],
};
