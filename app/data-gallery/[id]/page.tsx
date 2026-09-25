import { notFound } from "next/navigation";

import { ContentPageLayout } from "@/app/components";
import { makeCardMastHeadProps } from "@/app/site-config/content.helpers";
import { DATA } from "@/app/site-config/data";
import { EVENTS } from "@/app/site-config/event";
import { isInternalContent } from "@/app/site-config/typed.helpers";
import { CONTENT_TYPES } from "@/app/site-config/types";

export default async function DataItemPage(props: PageProps<"/data-gallery/[id]">) {
  const { id } = await props.params;
  const dataItem = DATA.filter(isInternalContent).find((d) => d.id === id);

  if (!dataItem) notFound();

  const {
    contentType,
    title,
    mastheadImage,
    themes,
    categories,
    body,
    relatedContent: relatedIds = [],
    exploreDataUrl,
  } = dataItem;

  // TODO: Move to content helpers, and broaden to fit any content type use case
  // Can related content be of a different content type?
  const relatedItems = relatedIds.flatMap((relId) => {
    const rel = DATA.find((d) => d.id === relId) || EVENTS.find((e) => e.id === relId);
    if (!rel) return [];
    return [
      {
        id: rel.id,
        title: rel.title,
        href: `${CONTENT_TYPES[rel.contentType].route}/${rel.id}`,
        themes: rel.themes,
        categories: rel.categories,
      },
    ];
  });

  return (
    <ContentPageLayout
      masthead={makeCardMastHeadProps({
        mastheadImage,
        title,
        callToAction: exploreDataUrl ? { label: "Explore Data", href: exploreDataUrl } : undefined,
      })}
      contentType={contentType}
      themes={themes}
      categories={categories}
      body={body}
      relatedContent={relatedItems}
    />
  );
}
