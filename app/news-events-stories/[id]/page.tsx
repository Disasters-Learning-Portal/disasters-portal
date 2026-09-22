import { notFound } from "next/navigation";
import { ContentPageLayout, SectionOverview } from "@/app/components";
import {
  makeCardMastHeadProps,
  makeMastheadTagProps,
  toStyleDate,
} from "@/app/site-config/content.helpers";
import { DATASTORIES } from "@/app/site-config/datastory";
import { EVENTS } from "@/app/site-config/event";
import {
  transformEventToPageMastHeadProps,
  transformEventToSectionOverviewProps,
} from "@/app/site-config/event/event.helpers";
import { NEWS } from "@/app/site-config/news";
import { STORIES } from "@/app/site-config/story";
import { isInternalContent } from "@/app/site-config/typed.helpers";

export default async function NewsEventsStoriesItemPage(
  props: PageProps<"/news-events-stories/[id]">,
) {
  const { id } = await props.params;

  const contentItem = [...STORIES, ...DATASTORIES, ...NEWS, ...EVENTS]
    .filter(isInternalContent)
    .find((i) => i.id === id);

  if (!contentItem) notFound();

  const { contentType, title, mastheadImage, themes, categories, body, datePublished } =
    contentItem;
  const isEvent = contentItem.contentType === "event";

  return (
    <ContentPageLayout
      masthead={
        isEvent
          ? transformEventToPageMastHeadProps(contentItem)
          : makeCardMastHeadProps({
              mastheadImage,
              title,
              tag: datePublished
                ? makeMastheadTagProps(`Published: ${toStyleDate(datePublished)}`)
                : undefined,
            })
      }
      contentType={contentType}
      themes={themes}
      categories={categories}
      body={body}
    >
      {isEvent && (
        <SectionOverview
          {...transformEventToSectionOverviewProps(contentItem)}
          isMultiColumnLayout
          className="margin-top-0 margin-bottom-0"
        />
      )}
    </ContentPageLayout>
  );
}
