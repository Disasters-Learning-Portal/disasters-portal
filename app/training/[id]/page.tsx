import { notFound } from "next/navigation";
import {
  ContentBlockRenderer,
  PageMasthead,
  PageSidebar,
  PageStatus,
  Section,
} from "@/app/components";
import {
  makeCardMastHeadProps,
  makeSimpleTagProps,
  toLongDate,
} from "@/app/site-config/content.helpers";

import { TRAININGS } from "@/app/site-config/training";
import { isInternalContent } from "@/app/site-config/typed.helpers";

export default async function TrainingItemPage(props: PageProps<"/training/[id]">) {
  const { id } = await props.params;
  const contentItem = TRAININGS.filter(isInternalContent).find((t) => t.id === id);

  if (!contentItem) notFound();

  const { contentType, date, mastheadImage, title, themes, categories, body } = contentItem;

  return (
    <>
      {/* Hero */}
      <PageMasthead
        {...makeCardMastHeadProps({ mastheadImage, title })}
        tag={(({ children: label, ...rest }) => ({ label, ...rest }))(
          makeSimpleTagProps(`Updated ${toLongDate(date)}`),
        )}
      />

      {/* Placeholder content only */}
      {!body && (
        <PageStatus
          heading="Under Development"
          description="The page you're looking for is under development."
        />
      )}

      <Section>
        <div className="grid-row grid-gap">
          {/* Sidebar */}
          <div className="grid-col-12 desktop:grid-col-3">
            <PageSidebar contentType={contentType} themes={themes} categories={categories} />
          </div>

          {/* Content */}
          <div className="grid-col-12 desktop:grid-col-9 margin-top-neg-7">
            {contentItem.body?.map((block, i) => (
              // biome-ignore lint/suspicious/noArrayIndexKey: static content blocks, never reorder
              <ContentBlockRenderer key={i} block={block} isMultiColumnLayout />
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
