import { Card } from "@teamimpact/veda-ui-blocks";

import {
  ContentBlockRenderer,
  SectionCardSimple,
  SectionCardSimpleMosaic,
  SectionHeading,
} from "@/app/components";

import {
  type CardSimplePropsArgs,
  makeCardMastHeadProps,
  makeCardSimpleProps,
} from "./site-config/content.helpers";
import { MOCK_CARD_LETSCONNECT } from "./site-config/home/home-card-lets_connect";
import { MOCK_CARD_MASTHEAD } from "./site-config/home/home-card-masthead";
import { HOME_CONTENT } from "./site-config/home/home-content";
import { NEWS_EVENTS_STORIES_CARDS } from "./site-config/home/home-sectioncardmosaic-news-events-stories";
import { RESOURCES_LEARNING_CARDS } from "./site-config/home/home-sectioncardsimple-resources-learning";
import { pickKeys, typedMap } from "./site-config/typed.helpers";

export default function Home() {
  const newsEventsStories: [
    CardSimplePropsArgs,
    CardSimplePropsArgs,
    CardSimplePropsArgs,
    CardSimplePropsArgs,
  ] = typedMap(NEWS_EVENTS_STORIES_CARDS, (item: (typeof NEWS_EVENTS_STORIES_CARDS)[number]) =>
    pickKeys(item, ["id", "contentType", "thumbnailImage", "themes", "title", "subtitle"]),
  );

  const trainings: CardSimplePropsArgs[] = RESOURCES_LEARNING_CARDS.map((i) => ({
    ...pickKeys(i, ["id", "contentType", "thumbnailImage", "themes", "title", "subtitle"]),
    ...("url" in i ? { url: i.url } : {}),
  }));

  return (
    <>
      <div className="home-card-masthead display-flex minh-card-xl">
        <Card {...makeCardMastHeadProps(MOCK_CARD_MASTHEAD)} />
      </div>
      <SectionCardSimpleMosaic
        sectionHeading={
          <SectionHeading
            linkProps={{ label: "More News and Events", href: "/news-events-stories" }}
          >
            News, Events & Stories
          </SectionHeading>
        }
        cards={typedMap(newsEventsStories, makeCardSimpleProps)}
      />
      {HOME_CONTENT.map((block, index) => (
        // biome-ignore lint/suspicious/noArrayIndexKey: static content, never reorders
        <ContentBlockRenderer key={index} block={block} />
      ))}
      <SectionCardSimple
        sectionHeading={
          <SectionHeading linkProps={{ label: "More Resources and Learning", href: "/training" }}>
            Resources & Learning
          </SectionHeading>
        }
        cards={typedMap(trainings, makeCardSimpleProps)}
        bgColor="base-lightest"
        className="margin-bottom-0"
      >
        <div className="grid-row margin-top-7">
          <Card {...MOCK_CARD_LETSCONNECT} />
        </div>
      </SectionCardSimple>
    </>
  );
}
