import { DATA_VISUALIZATION_URL } from "@/app/site-config/env.helpers";
import type { DataContent } from "@/app/site-config/types";

export const DATA__HYDROSAR_S1_CLASSIFICATIONS: DataContent = {
  id: "hydrosar-s1-classifications",

  contentType: "data",

  title: "HydroSAR Sentinel-1 Water Extent Classifications",

  description:
    "HydroSAR Sentinel-1 Water Extent Classifications identify post-event open water and inundated developed, vegetated, and agricultural areas from synthetic aperture radar observations.",

  thumbnailImage: {
    src: "/img/data/hydrosar-s1-classifications.webp",
    alt: "HydroSAR Sentinel-1 water extent classifications",
  },

  mastheadImage: {
    src: "/img/data/hydrosar-s1-classifications.webp",
    alt: "HydroSAR Sentinel-1 water extent classifications",
  },

  themes: ["respond", "recover"],

  categories: ["flood", "tropical cyclone", "severe weather"],

  relatedContent: [],

  exploreDataUrl: `${DATA_VISUALIZATION_URL}/?mapLon=-83.7158203125&mapLat=9.69829813302702&mapZoom=7.24&globeLon=undefined&globeLat=undefined&panePercents=0,100,0&on=7c2e40b8-93d1-4f6a-a05e-2b814c7d6e39$1.00&startTime=2012-01-19T00:00:00.000Z&endTime=2024-11-23T23:59:59.000Z&live=0`,

  body: [
    {
      type: "text",
      heading: "Summary",
      paragraphs: [
        "The HydroSAR Sentinel-1 Water Extent Classification product provides post-event maps of inundation derived from Copernicus Sentinel-1 synthetic aperture radar (SAR) observations. The product distinguishes water and flooding across multiple surface types, including open water, flooded developed areas, flooded vegetation, and flooded cropland. HydroSAR surface-water products are generated from dual-polarization Sentinel-1 radiometrically terrain-corrected observations and are designed to support mapping of inundation during flood events.",
        "Because Sentinel-1 is an active microwave radar sensor, observations can be acquired during both day and night and through cloud cover and many weather conditions that limit optical satellite imagery. The collection contains subdaily observations when suitable Sentinel-1 acquisitions are available.",
      ],
    },

    {
      type: "text",
      heading: "Suggested Use",
      paragraphs: [
        "Use HydroSAR classifications to identify the spatial extent and type of inundation following floods, tropical cyclones, and severe weather events. Separating open water from flooded vegetation, cropland, and developed areas can provide additional context for evaluating impacts to communities, agriculture, ecosystems, and infrastructure.",
        "SAR-based flood classifications should be interpreted with supporting imagery and event information. Radar water detection can be challenging in dense vegetation, developed areas, steep terrain, and along water boundaries, and surface roughness or other changes can influence radar backscatter. The classifications are intended to support situational awareness rather than provide a definitive assessment of impacts at individual properties.",
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
        "Alaska Satellite Facility Distributed Active Archive Center (ASF DAAC); University of Alaska Fairbanks; NASA HydroSAR; ESA Copernicus; NASA Disasters Program",
        "Use of this product should include: “The product contains modified Copernicus Sentinel-1 data, processed by the European Space Agency and NASA.”",
      ],
    },

    {
      type: "text",
      heading: "Tags",
      paragraphs: [
        "NASA, HydroSAR, ASF DAAC, Sentinel-1, SAR, Synthetic Aperture Radar, Surface Water, Flood Extent, Flooded Vegetation, Flooded Cropland, Flooded Developed Areas, Inundation",
      ],
    },
  ],
};
