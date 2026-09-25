import type { DataContent } from "@/app/site-config/types";

export const DATA__OPERA_DSWX: DataContent = {
  id: "opera-dswx",

  contentType: "data",

  title: "OPERA Dynamic Surface Water Extent (DSWx)",

  description:
    "The OPERA Dynamic Surface Water Extent (DSWx) product maps the presence of surface water, derived from both optical Harmonized Landsat Sentinel-2 observations and Sentinel-1 synthetic aperture radar, to support flood mapping and monitoring of open water.",

  thumbnailImage: {
    src: "/img/data/opera-dswx.webp",
    alt: "OPERA Dynamic Surface Water Extent (DSWx) water map",
  },

  mastheadImage: {
    src: "/img/data/opera-dswx.webp",
    alt: "OPERA Dynamic Surface Water Extent (DSWx) water map",
  },

  themes: ["respond", "recover", "prepare"],

  categories: ["flood", "tropical cyclone", "severe weather"],

  relatedContent: ["opera-dist-s1", "sentinel-2-mndwi", "landsat-mndwi"],

  body: [
    {
      type: "text",
      heading: "Summary",
      paragraphs: [
        "The OPERA Dynamic Surface Water Extent (DSWx) product suite maps where water is present at the land surface. It is produced in two forms that complement one another. DSWx-HLS is derived from Harmonized Landsat Sentinel-2 (HLS) optical observations and offers frequent coverage wherever skies are clear. DSWx-S1 is derived from Sentinel-1 C-band synthetic aperture radar, which penetrates cloud and operates day or night, so it can map water during the overcast conditions that typically accompany a flood.",
        "Products are distributed both as a classified water extent layer (WTR), which distinguishes open water from partial surface water and flags cloud, cloud shadow and snow or ice, and as a binary water layer (BWTR), which reduces the classification to water and not-water for quick interpretation. Change maps differencing two acquisition dates are also produced for some events.",
      ],
    },

    {
      type: "text",
      heading: "Suggested Use",
      paragraphs: [
        "DSWx supports rapid flood extent mapping and the monitoring of open water before, during and after an event. Comparing an observation against a pre-event baseline identifies inundated areas and helps estimate the footprint of flooding for response planning and damage assessment. The two sensors are best used together: the radar-derived product provides observations through cloud cover during the event itself, while the optical product contributes higher-frequency context and recovery monitoring once skies clear.",
        "Some caution is warranted in interpretation. Optical products cannot see the surface beneath cloud, and those pixels are flagged rather than classified. Radar-derived water detection can be confounded by terrain shadow, very smooth dry surfaces such as bare sand or paved areas, and dense vegetation canopy overlying standing water. Results should be read alongside true colour imagery and other observations rather than on their own.",
      ],
    },

    {
      type: "text",
      heading: "Satellite/Sensor",
      paragraphs: [
        "Operational Land Imager (OLI) on Landsat 8 and 9 and MultiSpectral Instrument (MSI) on the European Space Agency's Copernicus Sentinel-2 satellites, combined as Harmonized Landsat Sentinel-2 (HLS); and C-band Synthetic Aperture Radar (SAR) on the Copernicus Sentinel-1 satellites",
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
        "NASA Jet Propulsion Laboratory, California Institute of Technology; NASA OPERA; USGS; ESA Copernicus; NASA Disasters Program",
        "Use of this product should include: “Contains modified Copernicus Sentinel data (2022-2026) processed by ESA”",
      ],
    },

    {
      type: "text",
      heading: "Tags",
      paragraphs: [
        "NASA, OPERA, DSWx, DSWx-HLS, DSWx-S1, Dynamic Surface Water Extent, Surface Water, Flood, Inundation, Landsat, Sentinel-1, Sentinel-2, HLS, SAR, Synthetic Aperture Radar",
      ],
    },
  ],
};
