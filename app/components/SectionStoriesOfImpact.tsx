import type { SectionProps } from "@/app/components/Section";
import { SectionCardSimple } from "@/app/components/SectionCardSimple";
import { SectionHeading } from "@/app/components/SectionHeading";
import { makeCardSimpleProps } from "@/app/site-config/content.helpers";
import { typedMap } from "@/app/site-config/typed.helpers";
import type { EventContent, NewsContent, StoryContent } from "@/app/site-config/types";

const FEATURED_STORY_COUNT = 2;

type SectionStoriesOfImpactProps = SectionProps & {
  stories: (NewsContent | StoryContent | EventContent)[];
};

export const SectionStoriesOfImpact = ({
  stories,
  ...sectionProps
}: SectionStoriesOfImpactProps) => (
  <SectionCardSimple
    {...sectionProps}
    sectionHeading={
      <SectionHeading href="/news-events?contenttype=story">Stories of Impact</SectionHeading>
    }
    cards={typedMap(stories.slice(0, FEATURED_STORY_COUNT), makeCardSimpleProps)}
  />
);
