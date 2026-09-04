import { Gallery, PageMasthead, Section } from "@/app/components";
import { contentToGalleryItem, makeCardMastHeadProps } from "@/app/site-config/content.helpers";
import { DATASTORIES } from "@/app/site-config/datastory";
import { EVENTS } from "@/app/site-config/event";
import { NEWS } from "@/app/site-config/news";
import { NEWS_EVENTS_CARD_MASTHEAD } from "@/app/site-config/news-events/toplevel-page__card-masthead";
import { STORIES } from "@/app/site-config/story";

export default function NewsEventsCollectionPage() {
  const allItems = [...NEWS, ...STORIES, ...DATASTORIES, ...EVENTS];

  return (
    <>
      <PageMasthead {...makeCardMastHeadProps(NEWS_EVENTS_CARD_MASTHEAD)} />
      <Section>
        <Gallery items={allItems.map(contentToGalleryItem)} />
      </Section>
    </>
  );
}
