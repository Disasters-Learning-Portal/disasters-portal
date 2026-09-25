import { notFound } from "next/navigation";
import { ContentPageLayout } from "@/app/components";
import { makeCardMastHeadProps } from "@/app/site-config/content.helpers";

import { TRAININGS } from "@/app/site-config/training";
import { isInternalContent } from "@/app/site-config/typed.helpers";

export default async function TrainingItemPage(props: PageProps<"/training/[id]">) {
  const { id } = await props.params;
  const contentItem = TRAININGS.filter(isInternalContent).find((t) => t.id === id);

  if (!contentItem) notFound();

  const { contentType, datePublished, mastheadImage, title, subtitle, themes, categories, body } =
    contentItem;

  return (
    <ContentPageLayout
      masthead={makeCardMastHeadProps({ mastheadImage, title, subtitle, datePublished })}
      contentType={contentType}
      themes={themes}
      categories={categories}
      body={body}
    />
  );
}
