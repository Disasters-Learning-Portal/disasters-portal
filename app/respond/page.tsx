import {
  ContentBlockRenderer,
  PageMasthead,
  SectionCardCarousel,
  SectionCardSimple,
  SectionHeading,
} from "@/app/components/";
import { SectionCardMini } from "../components/SectionCardMini";
import {
  makeCardCarouselProps,
  makeCardMastHeadProps,
  makeCardSimpleProps,
} from "../site-config/content.helpers";
import { transformEventToCardMiniProps } from "../site-config/event/event.helpers";
import {
  RESPOND_CONTENT,
  RESPOND_DATASTORIES,
  RESPOND_EVENTS,
  RESPOND_STORIES,
  RESPOND_TRAININGS,
} from "../site-config/theme/theme__respond";
import { typedMap } from "../site-config/typed.helpers";

export default function RespondPage() {
  const { title, theme, subtitle, mastheadImage } = RESPOND_CONTENT;

  return (
    <>
      <PageMasthead {...makeCardMastHeadProps({ title, subtitle, theme, mastheadImage })} />
      <SectionCardSimple
        sectionHeading={
          <SectionHeading href="/news-events?contenttype=story">Stories of Impact</SectionHeading>
        }
        cards={typedMap(RESPOND_STORIES.slice(0, 2), makeCardSimpleProps)}
      />
      {RESPOND_CONTENT.body.map((block, index) => (
        // biome-ignore lint/suspicious/noArrayIndexKey: static content, never reorders
        <ContentBlockRenderer key={index} block={block} />
      ))}
      <SectionCardMini
        sectionHeading={
          <SectionHeading href="/news-events?contenttype=event">Latest Events</SectionHeading>
        }
        cards={typedMap(RESPOND_EVENTS, transformEventToCardMiniProps)}
      />
      <SectionCardCarousel
        sectionHeading={
          <SectionHeading href="/news-events?contenttype=datastory">Data Stories</SectionHeading>
        }
        cards={typedMap(RESPOND_DATASTORIES, makeCardCarouselProps)}
      />
      <SectionCardSimple
        sectionHeading={<SectionHeading href="/training">Resources & Learning</SectionHeading>}
        cards={typedMap(RESPOND_TRAININGS, makeCardSimpleProps)}
      />
    </>
  );
}
