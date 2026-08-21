import { EVENT__TYPHOON_SINLAKU_2026 } from "@/app/site-config/event/event__typhoon-sinlaku-2026";
import { NEWS__NEW_DISASTERS_PORTAL_TEST_HELP } from "@/app/site-config/news/news__new-disasters-portal-test-help";
import { STORY__ESTIMATING_LOSS_RECOVERY } from "@/app/site-config/story/story__estimating-loss-recovery";
import { STORY__FINDING_FLOODS } from "@/app/site-config/story/story__finding-floods";
import type { EventContent, NewsContent, StoryContent } from "@/app/site-config/types";

// Layout order: [0] featured, [1] regular, [2] compact top, [3] compact bottom
export const NEWS_EVENTS_CARDS: [
  NewsContent | StoryContent | EventContent,
  NewsContent | StoryContent | EventContent,
  NewsContent | StoryContent | EventContent,
  NewsContent | StoryContent | EventContent,
] = [
  STORY__ESTIMATING_LOSS_RECOVERY,
  STORY__FINDING_FLOODS,
  EVENT__TYPHOON_SINLAKU_2026,
  NEWS__NEW_DISASTERS_PORTAL_TEST_HELP,
];
