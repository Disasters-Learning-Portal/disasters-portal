import { Tag } from "@teamimpact/veda-ui-blocks";
import type { ReactNode } from "react";
import { AppLinkStyled } from "@/app/components/AppLink";
import {
  makeContentTypeTagProps,
  makeSimpleTagProps,
  makeThemeTagProps,
} from "@/app/site-config/content.helpers";
import {
  type Category,
  CONTENT_SIDEBAR_CONTENT_TYPES,
  type ContentType,
  type Theme,
} from "@/app/site-config/types";

export function PageSidebar({
  contentType,
  themes,
  categories,
  relatedContent = [],
  exploreDataUrl,
}: {
  contentType: ContentType;
  themes: Theme[];
  categories: Category[];
  relatedContent?: RelatedItem[];
  exploreDataUrl?: string;
}) {
  // TODO: update to include inpage navigation
  return (
    <aside>
      {
        // Begin section on themes, categories, related content
        CONTENT_SIDEBAR_CONTENT_TYPES.includes(contentType) && (
          <div className="bg-base-lightest padding-4 margin-bottom-4">
            {contentType === "data" && (
              <div className="margin-bottom-3">
                {exploreDataUrl ? (
                  <a
                    href={exploreDataUrl}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="usa-button width-full text-center"
                  >
                    Explore Data
                  </a>
                ) : (
                  <button type="button" className="usa-button width-full">
                    Explore Data
                  </button>
                )}
              </div>
            )}

            <div className="border-top border-base-lighter padding-top-3 margin-bottom-3">
              <MetaGroup label="Type">
                <div className="margin-right-1 margin-bottom-1">
                  <Tag {...makeContentTypeTagProps(contentType)} />
                </div>
              </MetaGroup>

              {themes.length > 0 && (
                <MetaGroup label="Theme">
                  {themes.map((theme) => (
                    <div key={theme} className="margin-right-1 margin-bottom-1">
                      <Tag {...makeThemeTagProps(theme)} />
                    </div>
                  ))}
                </MetaGroup>
              )}

              {categories.length > 0 && (
                <MetaGroup label="Hazard">
                  {categories.map((category) => (
                    <div key={category} className="margin-right-1 margin-bottom-1">
                      <Tag {...makeSimpleTagProps(category)} />
                    </div>
                  ))}
                </MetaGroup>
              )}
            </div>

            {relatedContent.length > 0 && (
              <div className="border-top border-base-lighter padding-top-3">
                <p className="text-bold font-body-sm margin-top-0 margin-bottom-3">
                  Related Content
                </p>
                {relatedContent.map((item) => (
                  <RelatedContentItem key={item.id} item={item} />
                ))}
              </div>
            )}
          </div>
        )
      }
    </aside>
  );
}

type RelatedItem = {
  id: string;
  title: string;
  href: string;
  themes: Theme[];
  categories: Category[];
};

function MetaGroup({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="margin-bottom-3">
      <p className="text-bold font-body-sm margin-top-0 margin-bottom-1">{label}</p>
      <div className="display-flex flex-wrap">{children}</div>
    </div>
  );
}

function RelatedContentItem({ item }: { item: RelatedItem }) {
  return (
    <div className="margin-bottom-3">
      <AppLinkStyled href={item.href} className="text-no-underline">
        <p className="font-heading-md text-bold text-primary-dark margin-top-0 margin-bottom-1">
          {item.title}
        </p>
      </AppLinkStyled>
      <div className="display-flex flex-wrap">
        {item.themes.map((theme) => (
          <div key={theme} className="margin-right-1 margin-bottom-1">
            <Tag {...makeThemeTagProps(theme)} />
          </div>
        ))}
        {item.categories.map((category) => (
          <div key={category} className="margin-right-1 margin-bottom-1">
            <Tag {...makeSimpleTagProps(category)} />
          </div>
        ))}
      </div>
    </div>
  );
}
