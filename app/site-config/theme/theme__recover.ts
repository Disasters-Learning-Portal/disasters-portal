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
    // Interim. The interactive GAIA compare map renders no tiles: veda-ui-blocks
    // flattens this collection's nested-array colormap into a query titiler rejects (#566).
    // This is a static render of the same two layers, at the same viewport, through the
    // collection's own colormap, so the section still shows the data during soft launch.
    // Restore the map with:
    //   git show d048ad2 -- app/site-config/theme/theme__recover.ts
    {
      type: "image",
      heading: "Data Visualization",
      src: "/img/theme/recover-gaia-building-exposure.webp",
      alt: "Two side-by-side maps of the Los Angeles basin from the GAIA dataset. The left map shows total built-up area per 100-meter grid cell, densest through the urban core. The right map shows only low-rise, wood-framed structures, which are sparser and more evenly spread across the suburbs. A legend gives the eight built-up area classes, from under 25,000 to over 450,000 square meters.",
      width: 1640,
      height: 894,
      caption:
        "The Global Assessment of Infrastructure Assets (GAIA) is a worldwide gridded building exposure dataset suitable for natural hazard risk analysis. The dataset provides a gridded representation of built-up areas worldwide in square meters. At each pixel, the value is a modeled value that represents total built-up area for the grid cell. It does not represent actual buildings in the grid cell. The left image is the total built-up area which aggregates all construction types, durability types, and height categories per grid cell. The right image shows the amount of low-rise (1-3 story), wood-framed structures per grid cell. Each 100x100 meter grid cell represents the total area in square meters.",
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
