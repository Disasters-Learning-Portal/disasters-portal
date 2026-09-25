import type { DataContent } from "@/app/site-config/types";

export const DATA__SENTINEL_1_SENTINEL_2_BURN_SEVERITY: DataContent = {
  id: "sentinel-1-sentinel-2-burn-severity",

  contentType: "data",

  title: "Sentinel-1 and Sentinel-2 Burn Severity",

  description:
    "This combined Sentinel-1 and Sentinel-2 product maps burned vegetation and urban areas and provides relative burn severity information using changes in optical reflectance and synthetic aperture radar backscatter.",

  thumbnailImage: {
    src: "/img/data/sentinel-1-sentinel-2-burn-severity.webp",
    alt: "Sentinel-1 and Sentinel-2 combined burn severity imagery",
  },

  mastheadImage: {
    src: "/img/data/sentinel-1-sentinel-2-burn-severity.webp",
    alt: "Sentinel-1 and Sentinel-2 combined burn severity imagery",
  },

  themes: ["respond", "recover"],

  categories: ["fire"],

  relatedContent: ["sentinel-2-nbr", "aviris-3-dnbr"],

  body: [
    {
      type: "text",
      heading: "Summary",
      paragraphs: [
        "This burn severity product integrates Copernicus Sentinel-1 Synthetic Aperture Radar (SAR) and Sentinel-2 MultiSpectral Instrument (MSI) observations to identify burned vegetation and urban areas and characterize relative fire severity. Sentinel-2 observations are used to calculate the differenced Normalized Burn Ratio (dNBR), which captures changes in vegetation using near-infrared and shortwave-infrared reflectance. Sentinel-1 observations are used to calculate changes in VH-polarized radar backscatter, which are sensitive to changes in surface structure and can provide complementary information in burned urban environments.",
      ],
    },

    {
      type: "text",
      heading: "Suggested Use",
      paragraphs: [
        "The combined Sentinel-1 and Sentinel-2 product can be used for rapid assessment of burned areas and relative fire severity across both vegetated and developed environments. Sentinel-2 dNBR is used to distinguish severity levels in burned vegetation, while changes in Sentinel-1 radar backscatter provide additional information about fire-related changes to urban surfaces and built infrastructure. The product can support situational awareness, post-fire impact assessment, and recovery planning. Severity values are proxies derived from satellite-observed surface changes and should not be interpreted as ground-validated measurements of fire effects or structural damage.",
      ],
    },

    {
      type: "text",
      heading: "Satellite/Sensor",
      paragraphs: [
        "C-band Synthetic Aperture Radar (SAR) aboard the European Space Agency's Copernicus Sentinel-1 satellites and the MultiSpectral Instrument (MSI) aboard the Copernicus Sentinel-2 satellites",
      ],
    },

    {
      type: "text",
      heading: "Resolution",
      paragraphs: ["Approximately 10 meters"],
    },

    {
      type: "text",
      heading: "Credits",
      paragraphs: [
        "Khuong Tran, Taejin Park, Aakash Chhabra, Weile Wang, and Kyle Kabasares; NASA Ames Research Center; ESA Copernicus; NASA Disasters Program",
      ],
    },

    {
      type: "text",
      heading: "Tags",
      paragraphs: [
        "NASA, Sentinel-1, Sentinel-2, SAR, MSI, Synthetic Aperture Radar, Burn Severity, Wildfire, dNBR, NBR, VH Backscatter, Surface Change",
      ],
    },
  ],
};
