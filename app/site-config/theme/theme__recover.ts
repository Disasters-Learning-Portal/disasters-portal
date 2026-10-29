import { CARTO_DARK_WITH_LABELS_BASEMAP_STYLE } from "@teamimpact/veda-ui-blocks";
import { STORY__ESTIMATING_LOSS_RECOVERY } from "@/app/site-config/story/story__estimating-loss-recovery";
import { TRAINING__EO_BUILDING_EXPOSURE } from "@/app/site-config/training/training__eo-building-exposure";
import { TRAINING__FUNDAMENTALS_REMOTE_SENSING } from "@/app/site-config/training/training__fundamentals-remote-sensing";
import { TRAINING__INTRODUCTION_TO_SAR } from "@/app/site-config/training/training__introduction-to-sar";
import { TRAINING__PORTAL_101 } from "@/app/site-config/training/training__portal-101";
import type {
  EventContent,
  NewsContent,
  StoryContent,
  ThemeContent,
  TrainingContent,
  TrainingContentExternal,
} from "@/app/site-config/types";

export const RECOVER_CONTENT: ThemeContent = {
  id: "recover",
  mastheadImage: {
    alt: "Debris removal operations along 6th street in Mayfield, Kentucky, Feb. 8, 2022. The Louisville District was working under the direction of FEMA at the request of the state and local government to perform debris removal in Graves County. Credits: Katelyn Newton / U.S. Army Corps of Engineers, Louisville District.",
    src: "/img/theme/recover-masthead.webp",
  },
  subtitle: "Assess impacts and rebuild stronger",
  theme: "recover",
  body: [
    {
      type: "stacCompare",
      heading: "Data Visualization",
      initialViewState: {
        longitude: -118.24,
        latitude: 34.07,
        zoom: 10,
      },
      baseMapStyle: CARTO_DARK_WITH_LABELS_BASEMAP_STYLE,
      leftLayerConfig: {
        type: "raster",
        collectionId: "gaia-total-composite",
        collectionAssetId: "total",
        dateRange: {
          from: "2025-01-01",
          to: "2025-01-01",
        },
        hideLegend: true,
      },
      rightLayerConfig: {
        type: "raster",
        collectionId: "gaia-wood-composite",
        collectionAssetId: "wood",
        dateRange: {
          from: "2025-01-01",
          to: "2025-01-01",
        },
        link: {
          label: "Learn More",
          href: withBasePath("/data-gallery/gaia"),
        },
      },
      caption:
        "The Global Assessment of Infrastructure Assets (GAIA) is a worldwide gridded building exposure dataset suitable for natural hazard risk analysis. The dataset provides a gridded representation of built-up areas worldwide in square meters. At each pixel, the value is a modeled value that represents total built-up area for the grid cell. It does not represent actual buildings in the grid cell. The left visualization shows total built-up area, aggregating all construction types, durability types, and height categories per grid cell. The right visualization shows the amount of low-rise (1–3 story), wood-framed structures per grid cell. Each 100 × 100 meter grid cell represents the modeled built-up area in square meters.",
    },
  ],
} as const;

// TODO: these would be fetched based on content id
export const RECOVER_STORIES: (NewsContent | StoryContent | EventContent)[] = [
  STORY__ESTIMATING_LOSS_RECOVERY,
];

// TODO: these would be fetched based on content id
export const RECOVER_TRAININGS: (TrainingContent | TrainingContentExternal)[] = [
  TRAINING__PORTAL_101,
  TRAINING__EO_BUILDING_EXPOSURE,
  TRAINING__FUNDAMENTALS_REMOTE_SENSING,
  TRAINING__INTRODUCTION_TO_SAR,
];
