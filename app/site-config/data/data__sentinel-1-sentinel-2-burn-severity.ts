import { DATA_VISUALIZATION_URL } from "@/app/site-config/env.helpers";
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

  exploreDataUrl: `${DATA_VISUALIZATION_URL}/?mapLon=-118.35023038461514&mapLat=34.13308530831017&mapZoom=11.08&globeLon=undefined&globeLat=undefined&panePercents=0,100,0&on=ff0ab6e9-831b-497f-8197-b541ef500470$1.00&startTime=2012-01-19T00:00:00.000Z&endTime=2025-01-12T23:59:59.000Z&live=0`,

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
        "The combined Sentinel-1 and Sentinel-2 product can be used for rapid assessment of burned areas and relative fire severity across both vegetated and developed environments. Sentinel-2 dNBR is used to distinguish severity levels in burned vegetation, while changes in Sentinel-1 radar backscatter provide additional information about fire-related changes to urban surfaces and built infrastructure. The product can support situational awareness, post-fire impact assessment, and recovery planning.",
        "These maps are preliminary results and had not been ground validated at the time of posting. Empirical thresholds applied to Sentinel-2 dNBR and Sentinel-1 dVH are used to separate vegetation and urban burned areas and assign relative severity classes, but those thresholds may not perform consistently across all locations at large spatial scales. Sentinel-1 SAR observations can also contain signal noise related to terrain effects and speckle, which may lead to incorrect severity classifications in some urban burned areas. Results should therefore be interpreted as relative indicators of satellite-observed surface change rather than definitive measurements of fire effects or structural damage, and may be refined as the analysis is improved.",
      ],
    },

    {
      type: "text",
      heading: "Terms of Use",
      paragraphs: [
        "NASA data and products are freely available to federal, state, public, non-profit and commercial users. This information can be experimental- or research-grade data products and may not be appropriate for operational use. These NASA data products, services, and the Disasters Mapping Portal are intended to aid decision makers and enhance situational awareness, but these data are not guaranteed to be consistently available or routinely updated. Use of this product should include: 'The product contains modified Copernicus Sentinel-1 and Sentinel-2 data, processed by the European Space Agency and NASA.'",
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
        "The product contains modified Copernicus Sentinel-1 and Sentinel-2 data, processed by the European Space Agency and NASA.",
      ],
    },

    {
      type: "text",
      heading: "Tags",
      paragraphs: [
        "NASA, Sentinel-1, Sentinel-2, SAR, MSI, Synthetic Aperture Radar, Burn Severity, Wildfire, dNBR, dVH, NBR, VH Backscatter, Surface Change",
      ],
    },
  ],
};
