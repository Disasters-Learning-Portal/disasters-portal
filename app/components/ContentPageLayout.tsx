import { type CardProps, InPageNavigation } from "@teamimpact/veda-ui-blocks";
import type { ReactNode } from "react";
import { ContentBlockRenderer } from "@/app/components/ContentBlockRenderer";
import { PageMasthead } from "@/app/components/PageMasthead";
import { PageSidebar, type RelatedItem } from "@/app/components/PageSidebar";
import { PageStatus } from "@/app/components/PageStatus";
import { Section } from "@/app/components/Section";
import type { Category, ContentBlock, ContentType, Theme } from "@/app/site-config/types";

const PAGE_CONTENT_ID = "page-content";

/** Shared layout for data, story, news, datastory, event and training detail pages. */
export function ContentPageLayout({
  masthead,
  contentType,
  themes,
  categories,
  body,
  relatedContent,
  exploreDataUrl,
  children,
}: {
  masthead: CardProps;
  contentType: ContentType;
  themes: Theme[];
  categories: Category[];
  body?: ContentBlock[];
  relatedContent?: RelatedItem[];
  exploreDataUrl?: string;
  /** Rendered above the body blocks, e.g. the event Overview. */
  children?: ReactNode;
}) {
  return (
    <>
      <PageMasthead {...masthead} />

      {!body && (
        <PageStatus
          heading="Under Development"
          description="The page you're looking for is under development."
        />
      )}

      {body && (
        <Section>
          <div className="grid-row grid-gap">
            <div className="grid-col-12 desktop:grid-col-3">
              <PageSidebar
                contentType={contentType}
                themes={themes}
                categories={categories}
                relatedContent={relatedContent}
                exploreDataUrl={exploreDataUrl}
              />
              <InPageNavigation data-main-content-selector={`#${PAGE_CONTENT_ID}`} />
            </div>

            <div id={PAGE_CONTENT_ID} className="grid-col-12 desktop:grid-col-9">
              {children}
              {/* Cancels the first block's own top margin, aligning the body with the sidebar. */}
              <div className="margin-top-neg-7">
                {body.map((block, i) => (
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
