import {
  ContentBlockRenderer,
  PageMasthead,
  PageSidebar,
  PageStatus,
  Section,
  SectionCardDetailed,
  SectionHeading,
  SectionOverview,
} from "@/app/components";
import { makeCardDetailedImageLeftProps } from "@/app/site-config/content.helpers";
import { DATASETS } from "@/app/site-config/dataset";
import {
  transformEventToPageMastHeadProps,
  transformEventToSectionOverviewProps,
} from "@/app/site-config/event/event.helpers";
import type { EventContent } from "@/app/site-config/types";

export default async function EventItemPage(contentItem: EventContent) {
  // TO DO: this will need to account for inpage navigation once implements

  const { contentType, themes, categories, body, relatedProducts = [] } = contentItem;

  // Unknown ids are dropped, matching the related content lookup on the dataset page.
  const products = relatedProducts
    .flatMap((id) => DATASETS.find((d) => d.id === id))
    .filter((d) => !!d);

  return (
    <>
      {/* Hero */}
      <PageMasthead {...transformEventToPageMastHeadProps(contentItem)} />

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
            </div>
            {/* Content */}
            <div className="grid-col-12 desktop:grid-col-9">
              <SectionOverview
                {...transformEventToSectionOverviewProps(contentItem)}
                isMultiColumnLayout
                className="margin-top-0 margin-bottom-0"
              />
              <div className="margin-top-neg-7">
                {body?.map((block, i) => (
                  // biome-ignore lint/suspicious/noArrayIndexKey: static content blocks, never reorder
                  <ContentBlockRenderer key={i} block={block} isMultiColumnLayout />
                ))}
                {products.length > 0 && (
                  <SectionCardDetailed
                    isMultiColumnLayout
                    sectionHeading={<SectionHeading>Related Products</SectionHeading>}
                    cards={products.map(
                      ({
                        id,
                        contentType,
                        title,
                        description,
                        thumbnailImage,
                        categories,
                        themes,
                      }) =>
                        makeCardDetailedImageLeftProps({
                          id,
                          contentType,
                          title,
                          description,
                          thumbnailImage,
                          tags: [...categories, ...themes],
                        }),
                    )}
                  />
                )}
              </div>
            </div>
          </div>
        </Section>
      )}
    </>
  );
}
