import {
  ContentBlockRenderer,
  PageMasthead,
  SectionCardSimple,
  SectionHeading,
} from "@/app/components/";
import { SectionCardSimpleMini } from "@/app/components/SectionCardSimpleMini";
import {
  type CardMastheadPropsArgs,
  type CardSimplePropsArgs,
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
import { pickKeys, typedMap } from "@/app/site-config/typed.helpers";

export default function RespondPage() {
  const { theme, subtitle, mastheadImage }: CardMastheadPropsArgs = RESPOND_CONTENT;

  const stories: CardSimplePropsArgs[] = RESPOND_STORIES.slice(0, 2).map((i) =>
    pickKeys(i, ["id", "contentType", "thumbnailImage", "themes", "title", "subtitle"]),
  );

  const dataStories: CardSimplePropsArgs[] = RESPOND_DATASTORIES.map((i) => ({
    ...pickKeys(i, ["id", "contentType", "thumbnailImage", "themes", "title", "subtitle"]),
    ...("url" in i ? { url: i.url } : {}),
  }));

  const trainings: CardSimplePropsArgs[] = RESPOND_TRAININGS.map((i) => ({
    ...pickKeys(i, ["id", "contentType", "thumbnailImage", "title", "subtitle"]),
    ...("url" in i ? { url: i.url } : {}),
  }));

  return (
    <>
      <PageMasthead {...makeCardMastHeadProps({ subtitle, theme, mastheadImage })} />
      <SectionCardSimpleMini
        sectionHeading={
          <SectionHeading
            linkProps={{ label: "More Events", href: "/news-events-stories?type=event" }}
          >
            Latest Events
          </SectionHeading>
        }
        cards={typedMap(RESPOND_EVENTS, transformEventToCardSimpleProps)}
      />
      <SectionCardSimple
        sectionHeading={
          <SectionHeading
            linkProps={{ label: "More Stories of Impact", href: "/news-events-stories?type=story" }}
          >
            Stories of Impact
          </SectionHeading>
        }
        cards={typedMap(stories, makeCardSimpleProps)}
      />
      {RESPOND_CONTENT.body.map((block, index) => (
        // biome-ignore lint/suspicious/noArrayIndexKey: static content, never reorders
        <ContentBlockRenderer key={index} block={block} />
      ))}
      {dataStories.length > 0 && (
        <SectionCardSimple
          sectionHeading={
            <SectionHeading
              linkProps={{
                label: "More Data Stories",
                href: "/news-events-stories?type=datastory",
              }}
            >
              Data Stories
            </SectionHeading>
          }
          cards={typedMap(dataStories, makeCardSimpleProps)}
        />
      )}
      <SectionCardSimple
        sectionHeading={
          <SectionHeading linkProps={{ label: "More Resources and Learning", href: "/training" }}>
            Resources & Learning
          </SectionHeading>
        }
        cards={typedMap(trainings, makeCardSimpleProps)}
      />
    </>
  );
}
