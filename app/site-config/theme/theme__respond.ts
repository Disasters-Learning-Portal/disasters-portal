import { CARTO_DARK_WITH_LABELS_BASEMAP_STYLE } from "@teamimpact/veda-ui-blocks";
import { DATASTORY__LAHAINA_FIRE } from "@/app/site-config/datastory/datastory__lahaina-fire";
import { DATASTORY__SO2_VOLCANOES } from "@/app/site-config/datastory/datastory__so2-volcanoes";
import { EVENT__SOUTHERN_CALIFORNIA_FIRE_JAN_2025 } from "@/app/site-config/event/event__southern-california-fire-jan-2025";
import { EVENT__TEXAS_FLOODS_JULY_2025 } from "@/app/site-config/event/event__texas-floods-july-2025";
import { EVENT__TYPHOON_SINLAKU_2026 } from "@/app/site-config/event/event__typhoon-sinlaku-2026";
import { EVENT__US_WINTER_STORM_2026 } from "@/app/site-config/event/event__us-winter-storm-jan-2026";
import { STORY__FINDING_FLOODS } from "@/app/site-config/story/story__finding-floods";
import { STORY__SEEING_BEYOND_FLAMES } from "@/app/site-config/story/story__seeing-beyond-flames";
import { STORY__SUPPORTING_COMMUNITIES_HURRICANE_HELENE } from "@/app/site-config/story/story__supporting-communities-hurricane-helene";
import { STORY__TRACKING_TORNADOES_FROM_SPACE } from "@/app/site-config/story/story__tracking-tornadoes-from-space";
import { TRAINING__EO_PRE_POST_FIRE_MONITORING } from "@/app/site-config/training/training__eo-pre-post-fire-monitoring";
import { TRAINING__FUNDAMENTALS_REMOTE_SENSING } from "@/app/site-config/training/training__fundamentals-remote-sensing";
import { TRAINING__INTRODUCTION_TO_SAR } from "@/app/site-config/training/training__introduction-to-sar";
import { TRAINING__LIFELINES_WILDFIRE_WORKFLOW } from "@/app/site-config/training/training__lifelines-wildfire-workflow";
import type {
  DataStoryContent,
  DataStoryContentExternal,
  EventContent,
  NewsContent,
  StoryContent,
  ThemeContent,
  TrainingContent,
  TrainingContentExternal,
} from "@/app/site-config/types";

export const RESPOND_CONTENT: ThemeContent = {
  id: "respond",
  mastheadImage: { alt: "", src: "/img/theme/respond-masthead.webp" },
  subtitle: "Support real-time decisions with timely insights",
  theme: "respond",
  body: [
    {
      type: "stacCompare",
      heading: "Data Visualization",
      initialViewState: { longitude: -96.43, latitude: 41.25, zoom: 9 },
      baseMapStyle: CARTO_DARK_WITH_LABELS_BASEMAP_STYLE,
      leftLayerConfig: {
        type: "raster",
        collectionId: "sentinel2-truecolor-subdaily",
        collectionAssetId: "truecolor",
        dateRange: { from: "2019-03-16", to: "2019-03-16" },
      },
      rightLayerConfig: {
        type: "raster",
        collectionId: "sentinel2-mndwi-subdaily",
        collectionAssetId: "mndwi",
        dateRange: { from: "2019-03-16", to: "2019-03-16" },
      },
      caption:
        "The midwestern United States was greatly impacted by flooding during Spring 2019. This visualization shows how flooding can be detected using moderate resolution ESA Sentinel-2 imagery, comparing a True Color composite from Sentinel-2 imagery on the left with a Modified Normalized Difference Water Index (mNDWI) product derived from Sentinel-2 imagery on the right. In the mNDWI product, likely water appears as blue.",
    },
  ],
} as const;

// TODO: these would be fetched based on content id
export const RESPOND_STORIES: [
  NewsContent | StoryContent | EventContent,
  NewsContent | StoryContent | EventContent,
  NewsContent | StoryContent | EventContent,
  NewsContent | StoryContent | EventContent,
] = [
  STORY__FINDING_FLOODS,
  STORY__TRACKING_TORNADOES_FROM_SPACE,
  STORY__SEEING_BEYOND_FLAMES,
  STORY__SUPPORTING_COMMUNITIES_HURRICANE_HELENE,
];

// TODO: these would be fetched based on content id
export const RESPOND_EVENTS: EventContent[] = [
  EVENT__TYPHOON_SINLAKU_2026,
  EVENT__US_WINTER_STORM_2026,
  EVENT__TEXAS_FLOODS_JULY_2025,
  EVENT__SOUTHERN_CALIFORNIA_FIRE_JAN_2025,
];

// TODO: these would be fetched based on content id
export const RESPOND_DATASTORIES: (DataStoryContent | DataStoryContentExternal)[] = [
  DATASTORY__SO2_VOLCANOES,
  DATASTORY__LAHAINA_FIRE,
];

// TODO: these would be fetched based on content id
export const RESPOND_TRAININGS: (TrainingContent | TrainingContentExternal)[] = [
  TRAINING__LIFELINES_WILDFIRE_WORKFLOW,
  TRAINING__FUNDAMENTALS_REMOTE_SENSING,
  TRAINING__INTRODUCTION_TO_SAR,
  TRAINING__EO_PRE_POST_FIRE_MONITORING,
];
