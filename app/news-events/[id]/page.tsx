import { InPageNavigation } from "@teamimpact/veda-ui-blocks";
import { notFound } from "next/navigation";
import {
  ContentBlockRenderer,
  PageMasthead,
  PageSidebar,
  PageStatus,
  Section,
} from "@/app/components";
import { makeCardMastHeadProps, toStyleDate } from "@/app/site-config/content.helpers";
import { DATASTORIES } from "@/app/site-config/datastory";
import { EVENTS } from "@/app/site-config/event";
import { NEWS } from "@/app/site-config/news";
import { STORIES } from "@/app/site-config/story";
import { isInternalContent } from "@/app/site-config/typed.helpers";
import EventItemPage from "./page_event";

export default async function NewsEventsItemPage(props: PageProps<"/news-events/[id]">) {
  const { id } = await props.params;

  const contentItem = [...STORIES, ...DATASTORIES, ...NEWS, ...EVENTS]
    .filter(isInternalContent)
    .find((i) => i.id === id);

  if (!contentItem) notFound();

  const { contentType } = contentItem;

  // event page layout
  if (contentType === "event") return EventItemPage(contentItem);

  // story, datastory, news page layout
  const { title, mastheadImage, themes, categories, body } = contentItem;
  const publishDate = "date" in contentItem ? contentItem.date : undefined;

  return (
    <>
      {/* Hero */}
      <PageMasthead {...makeCardMastHeadProps({ mastheadImage, title })} />

      {/* Placeholder content only */}
      {!body && (
        <PageStatus
          heading="Under Development"
          description="The page you're looking for is under development."
        />
      )}

      {/* Content */}
      {body && (
        <Section>
          <div className="grid-row grid-gap">
            {/* Sidebar */}
            <div className="grid-col-12 desktop:grid-col-3">
              <PageSidebar contentType={contentType} themes={themes} categories={categories} />
              <InPageNavigation
                data-main-content-selector="#news-events-item-body"
                data-heading-elements="h2"
              />
            </div>

            {/* Content */}
            <div className={"grid-col-12 desktop:grid-col-9"}>
              <div id="news-events-item-body" className="margin-top-neg-7">
                {publishDate && (
                  <p className="font-body-sm text-base margin-top-0 margin-bottom-3">
                    Published: {toStyleDate(publishDate)}
                  </p>
                )}
                {body?.map((block, i) => (
                  // biome-ignore lint/suspicious/noArrayIndexKey: static content blocks, never reorder
                  <ContentBlockRenderer key={i} block={block} isMultiColumnLayout />
                ))}
              </div>
            </div>
          </div>
        </Section>
      )}
    </>
  );
}
