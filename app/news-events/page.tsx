import { PageMasthead, SectionCardDetailed } from "@/app/components";
import {
  makeCardDetailedImageLeftProps,
  makeCardMastHeadProps,
} from "@/app/site-config/content.helpers";
import { DATASTORIES } from "@/app/site-config/datastory";
import { NEWS } from "@/app/site-config/news";
import { NEWS_EVENTS_CARD_MASTHEAD } from "@/app/site-config/news-events/toplevel-page__card-masthead";
import { STORIES } from "@/app/site-config/story";
import type { ContentType } from "@/app/site-config/types";
import { EVENTS } from "../site-config/event";

type FilterContentType = Extract<ContentType, "news" | "story" | "datastory" | "event">;
const CONTENT_TYPE_FILTER_VALUES: FilterContentType[] = ["news", "story", "datastory", "event"];

export default async function NewsEventsCollectionPage(props: PageProps<"/news-events">) {
  const { contenttype = "" } = (await props.searchParams) ?? {};

  const contentTypeFilter = CONTENT_TYPE_FILTER_VALUES.includes(contenttype as FilterContentType)
    ? (contenttype as FilterContentType)
    : null;

  const allItems = [...NEWS, ...STORIES, ...DATASTORIES, ...EVENTS];
  const filteredItems = contentTypeFilter
    ? allItems.filter((item) => item.contentType === contentTypeFilter)
    : allItems;

  return (
    <>
      <PageMasthead {...makeCardMastHeadProps(NEWS_EVENTS_CARD_MASTHEAD)} />
      <SectionCardDetailed
        cards={filteredItems.map((item) => makeCardDetailedImageLeftProps(item))}
      />
    </>
  );
}
