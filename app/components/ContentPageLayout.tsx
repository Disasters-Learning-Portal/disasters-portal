import { type CardProps, InPageNavigation } from "@teamimpact/veda-ui-blocks";
import type { ReactNode } from "react";
import type { AppLink } from "@/app/components/AppLink";
import { ContentBlockRenderer } from "@/app/components/ContentBlockRenderer";
import { PageMasthead } from "@/app/components/PageMasthead";
import { PageSidebar, type RelatedItem, type SidebarDetail } from "@/app/components/PageSidebar";
import { PageStatus } from "@/app/components/PageStatus";
import { Section } from "@/app/components/Section";
import {
  type Category,
  type ContentBlock,
  type ContentType,
  SHOW_IN_PAGE_NAVIGATION_CONTENT_TYPES,
  type Theme,
} from "@/app/site-config/types";
import styles from "./ContentPageLayout.module.css";

const PAGE_CONTENT_ID = "page-content";

/** Shared layout for data, story, news, datastory, event and training detail pages. */
export function ContentPageLayout({
  masthead,
  contentType,
  themes,
  categories,
  details,
  body,
  relatedContent,
  children,
}: {
  masthead: CardProps<typeof AppLink>;
  contentType: ContentType;
  themes: Theme[];
  categories: Category[];
  details?: SidebarDetail[];
  body?: ContentBlock[];
  relatedContent?: RelatedItem[];
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
              <div className={styles.aside}>
                {SHOW_IN_PAGE_NAVIGATION_CONTENT_TYPES.includes(contentType) && (
                  <InPageNavigation
                    // disable the default sticky behavior of the nav as it
                    // would conflict with the scrolling column.
                    className="position-static"
                    data-main-content-selector={`#${PAGE_CONTENT_ID}`}
                    data-heading-elements="h2"
                  />
                )}
                <PageSidebar
                  contentType={contentType}
                  themes={themes}
                  categories={categories}
                  details={details}
                  relatedContent={relatedContent}
                />
              </div>
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
