import {
  ContentBlockRenderer,
  PageMasthead,
  SectionCardCarousel,
  SectionCardSimple,
  SectionHeading,
} from "@/app/components/";
import { SectionCardSimpleMini } from "@/app/components/SectionCardSimpleMini";
import {
  type CardMastheadPropsArgs,
  type CardSimplePropsArgs,
  makeCardCarouselProps,
  makeCardMastHeadProps,
  makeCardSimpleProps,
} from "@/app/site-config/content.helpers";
import { transformEventToCardSimpleProps } from "@/app/site-config/event/event.helpers";
import {
  RESPOND_CONTENT,
  RESPOND_DATASTORIES,
  RESPOND_EVENTS,
  RESPOND_STORIES,
  RESPOND_TRAININGS,
} from "@/app/site-config/theme/theme__respond";
import { typedMap } from "@/app/site-config/typed.helpers";

export default function RespondPage() {
  const { title, theme, subtitle, mastheadImage }: CardMastheadPropsArgs = RESPOND_CONTENT;
  const stories: CardSimplePropsArgs[] = RESPOND_STORIES.slice(0, 2).map(
    ({ id, contentType, thumbnailImage, themes, title }) => ({
      id,
      contentType,
      thumbnailImage,
      themes,
      title,
    }),
  );

  const trainings = RESPOND_TRAININGS.map(
    ({ id, contentType, thumbnailImage, title, ...rest }) => ({
      id,
      contentType,
      thumbnailImage,
      title,
      url: "url" in rest ? rest.url : undefined,
    }),
  );

  return (
    <>
      <PageMasthead {...makeCardMastHeadProps({ title, subtitle, theme, mastheadImage })} />
      <SectionCardSimple
        sectionHeading={
          <SectionHeading href="/news-events?contenttype=story">Stories of Impact</SectionHeading>
        }
        cards={typedMap(stories, makeCardSimpleProps)}
      />
      {RESPOND_CONTENT.body.map((block, index) => (
        // biome-ignore lint/suspicious/noArrayIndexKey: static content, never reorders
        <ContentBlockRenderer key={index} block={block} />
      ))}
      <SectionCardSimpleMini
        sectionHeading={
          <SectionHeading href="/news-events?contenttype=event">Latest Events</SectionHeading>
        }
        cards={typedMap(RESPOND_EVENTS, transformEventToCardSimpleProps)}
      />
      <SectionCardCarousel
        sectionHeading={
          <SectionHeading href="/news-events?contenttype=datastory">Data Stories</SectionHeading>
        }
        cards={typedMap(RESPOND_DATASTORIES, makeCardCarouselProps)}
      />
      <SectionCardSimple
        sectionHeading={<SectionHeading href="/training">Resources & Learning</SectionHeading>}
        cards={typedMap(trainings, makeCardSimpleProps)}
      />
    </>
  );
}
