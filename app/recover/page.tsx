import {
  ContentBlockRenderer,
  PageMasthead,
  SectionCardCarousel,
  SectionCardSimple,
  SectionHeading,
} from "@/app/components/";
import {
  type CardSimplePropsArgs,
  makeCardCarouselProps,
  makeCardMastHeadProps,
  makeCardSimpleProps,
} from "@/app/site-config/content.helpers";
import {
  RECOVER_CONTENT,
  RECOVER_DATASTORIES,
  RECOVER_STORIES,
  RECOVER_TRAININGS,
} from "@/app/site-config/theme/theme__recover";
import { typedMap } from "@/app/site-config/typed.helpers";

export default function RecoverPage() {
  const { title, theme, subtitle, mastheadImage } = RECOVER_CONTENT;

  const stories: CardSimplePropsArgs[] = RECOVER_STORIES.slice(0, 2).map(
    ({ id, contentType, thumbnailImage, themes, title }) => ({
      id,
      contentType,
      thumbnailImage,
      themes,
      title,
    }),
  );

  const trainings = RECOVER_TRAININGS.map(
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
      {RECOVER_CONTENT.body.map((block, index) => (
        // biome-ignore lint/suspicious/noArrayIndexKey: static content, never reorders
        <ContentBlockRenderer key={index} block={block} />
      ))}
      <SectionCardCarousel
        sectionHeading={
          <SectionHeading href="/news-events?contenttype=datastory">Data Stories</SectionHeading>
        }
        cards={typedMap(RECOVER_DATASTORIES, makeCardCarouselProps)}
      />
      <SectionCardSimple
        sectionHeading={<SectionHeading href="/training">Resources & Learning</SectionHeading>}
        cards={typedMap(trainings, makeCardSimpleProps)}
      />
    </>
  );
}
