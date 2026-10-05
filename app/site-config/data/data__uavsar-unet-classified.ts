import { DATA_VISUALIZATION_URL } from "@/app/site-config/env.helpers";
import type { DataContent } from "@/app/site-config/types";

export const DATA__UAVSAR_UNET_CLASSIFIED: DataContent = {
  id: "uavsar-unet-classified",

  contentType: "data",

  title: "UAVSAR U-Net Flood Classification",

  description:
    "Machine learning flood maps derived from UAVSAR polarimetric radar using a U-Net algorithm, identifying open water flooding and inundation beneath tree canopy and labeling the type of land cover that was flooded.",

  thumbnailImage: {
    src: "/img/event/texas-floods-july-2025.webp",
    alt: "UAVSAR U-Net flood classification over central Texas from July 2025, shown over aerial imagery of a river and reservoir system, with open water and inundation in blue, flooded developed areas in red, and flooded cropland in orange",
  },

  mastheadImage: {
    src: "/img/event/texas-floods-july-2025.webp",
    alt: "UAVSAR U-Net flood classification over central Texas from July 2025, shown over aerial imagery of a river and reservoir system, with open water and inundation in blue, flooded developed areas in red, and flooded cropland in orange",
  },

  themes: ["respond", "recover"],

  categories: ["flood", "tropical cyclone", "severe weather"],

  relatedContent: ["uavsar-rgb", "uavsar-unet-classified-grayscale", "uavsar-quicklook-classified"],

  exploreDataUrl: `${DATA_VISUALIZATION_URL}/?mapLon=-98.3935546875&mapLat=30.217554530425204&mapZoom=8.73&globeLon=undefined&globeLat=undefined&panePercents=0,100,0&on=e091372b-a653-4e5a-a474-625ee50e15cc$1.00&startTime=2012-01-19T00:00:00.000Z&endTime=2025-07-31T23:59:59.000Z&live=0`,

  body: [
    {
      type: "text",
      heading: "Summary",
      paragraphs: [
        "These maps show the results of a machine learning classification applied to UAVSAR data to identify open water flooding and inundation beneath tree canopy. Colored areas show detected flooding, with the color indicating the type of land cover that was flooded; non-flooded areas are transparent so the product can be laid over a basemap or over the source radar imagery.",
        "The classification uses a U-Net machine learning algorithm trained on UAVSAR data from previous flood events. UAVSAR provides polarimetric synthetic aperture radar data from which different scattering mechanisms can be observed, and those mechanisms carry information about the type of flooding. Flooding beneath vegetation produces strong double-bounce scattering between the water surface and tree trunks, non-flooded vegetation is generally dominated by volume scattering from the forest canopy, and open water flooding produces weak radar returns in all polarizations.",
      ],
    },

    {
      type: "text",
      heading: "Suggested Use",
      paragraphs: [
        "Use this product to map flood extent during and after an event, particularly in forested and vegetated areas where optical imagery cannot see the ground. Because the classification labels the flooded land cover type, it can help distinguish flooded developed areas from flooded cropland and from open water, which supports damage assessment and prioritization of response.",
        "One known limitation deserves attention before operational use: strong double-bounce scattering from urban areas that happen to be aligned with the radar viewing direction can mimic the signature of flooding beneath vegetation and produce erroneous classifications. Flooded developed areas in particular should be corroborated against the source UAVSAR imagery or an independent source before being treated as confirmed. Results are also sensitive to the land cover types represented in the training data.",
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
        "6 meter spatial resolution. UAVSAR observations are collected in approximately 22-kilometer-wide airborne swaths and delivered here as geocoded classified imagery, including individual flight lines and multi-flight monthly composites.",
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
        "NASA, JPL, UAVSAR, SAR, Synthetic Aperture Radar, L-band, Machine Learning, U-Net, Classification, Flood, Inundation, Under Canopy Flooding, Land Cover, Airborne, Disaster Response",
      ],
    },
  ],
};
