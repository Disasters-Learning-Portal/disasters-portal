import { CARTO_DARK_WITH_LABELS_BASEMAP_STYLE } from "@teamimpact/veda-ui-blocks";
import { DATASTORY__TOOLS_YOU_CAN_USE_MAPPING_FLOOD_IMPACTS } from "@/app/site-config/datastory/datastory__tools-you-can-use-mapping-flood-impacts";
import { EVENT__TEXAS_FLOODS_JULY_2025 } from "@/app/site-config/event/event__texas-floods-july-2025";
import { EVENT__TYPHOON_SINLAKU_APR_2026 } from "@/app/site-config/event/event__typhoon-sinlaku-apr-2026";
import { EVENT__US_WINTER_STORM_JAN_2026 } from "@/app/site-config/event/event__us-winter-storm-jan-2026";
import { EVENT__VENEZUELA_EQ_JUN_2026 } from "@/app/site-config/event/event__venezuela-earthquake-jun-2026";
import { STORY__FINDING_FLOODS } from "@/app/site-config/story/story__finding-floods";
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
        link: {
          label: "Learn More",
          href: withBasePath("/data-gallery/sentinel-2-true-color"),
      },
      },
      rightLayerConfig: {
        type: "raster",
        collectionId: "sentinel2-mndwi-subdaily",
        collectionAssetId: "mndwi",
        dateRange: { from: "2019-03-16", to: "2019-03-16" },
        link: {
          label: "Learn More",
          href: withBasePath("/data-gallery/sentinel-2-mndwi"),
      },
      caption:
        "The midwestern United States was greatly impacted by flooding during Spring 2019. This visualization shows how flooding can be detected using moderate resolution Copernicus Sentinel-2 imagery, comparing a True Color composite from Sentinel-2 imagery on the left with a Modified Normalized Difference Water Index (mNDWI) product derived from Sentinel-2 imagery on the right. In the mNDWI product, likely water appears as blue.",
    },
  ],
} as const;

// TODO: these would be fetched based on content id
export const RESPOND_STORIES: (NewsContent | StoryContent | EventContent)[] = [
  STORY__FINDING_FLOODS,
];

// TODO: these would be fetched based on content id
export const RESPOND_EVENTS: EventContent[] = [
  EVENT__VENEZUELA_EQ_JUN_2026,
  EVENT__TYPHOON_SINLAKU_APR_2026,
  EVENT__US_WINTER_STORM_JAN_2026,
  EVENT__TEXAS_FLOODS_JULY_2025,
];

// TODO: these would be fetched based on content id
export const RESPOND_DATASTORIES: (DataStoryContent | DataStoryContentExternal)[] = [
  DATASTORY__TOOLS_YOU_CAN_USE_MAPPING_FLOOD_IMPACTS,
];

// TODO: these would be fetched based on content id
export const RESPOND_TRAININGS: (TrainingContent | TrainingContentExternal)[] = [
  TRAINING__LIFELINES_WILDFIRE_WORKFLOW,
  TRAINING__FUNDAMENTALS_REMOTE_SENSING,
  TRAINING__INTRODUCTION_TO_SAR,
  TRAINING__EO_PRE_POST_FIRE_MONITORING,
];
