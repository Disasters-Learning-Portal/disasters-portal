import { Tag } from "@teamimpact/veda-ui-blocks";
import type { ReactNode } from "react";
import { AppLinkStyled } from "@/app/components/AppLink";
import {
  makeContentTypeTagProps,
  makeOutlineTagProps,
  makeThemeTagProps,
} from "@/app/site-config/content.helpers";
import type { Category, ContentType, Theme } from "@/app/site-config/types";

export function PageSidebar({
  contentType,
  themes,
  categories,
  details = [],
  relatedContent = [],
}: {
  contentType: ContentType;
  themes: Theme[];
  categories: Category[];
  details?: SidebarDetail[];
  relatedContent?: RelatedItem[];
}) {
  return (
    <aside>
      <div className="padding-x-4 margin-bottom-4">
        <div className="margin-bottom-3">
          <MetaTags label="Type">
            <div className="margin-right-1 margin-bottom-1">
              <Tag {...makeOutlineTagProps(makeContentTypeTagProps(contentType))} />
            </div>
          </MetaTags>

          {themes.length > 0 && (
            <MetaTags label="Theme">
              {themes.map((theme) => (
                <div key={theme} className="margin-right-1 margin-bottom-1">
                  <Tag {...makeOutlineTagProps(makeThemeTagProps(theme))} />
                </div>
              ))}
            </MetaTags>
          )}

          {categories.length > 0 && (
            <MetaTags label="Hazard">
              {categories.map((category) => (
                <div key={category} className="margin-right-1 margin-bottom-1">
                  <Tag {...makeOutlineTagProps(category)} />
                </div>
              ))}
            </MetaTags>
          )}

          {details.map(({ label, content }) => (
            <MetaTags key={label} label={label}>
              <div className="text-semibold">{content}</div>
            </MetaTags>
          ))}
        </div>

        {relatedContent.length > 0 && (
          <div className="margin-top-3">
            <MetaLabel>Related Content</MetaLabel>
            {relatedContent.map((item) => (
              <MetaRelatedContent key={item.id} item={item} />
            ))}
          </div>
        )}
      </div>
    </aside>
  );
}

export type SidebarDetail = { label: string; content: ReactNode };

export type RelatedItem = {
  id: string;
  title: string;
  href: string;
  themes: Theme[];
  categories: Category[];
};

function MetaLabel({ children }: { children: string }) {
  return (
    <p className="text-uppercase text-bold font-body-3xs text-base-dark margin-top-0 margin-bottom-1">
      {children}
    </p>
  );
}

function MetaTags({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="border-bottom border-base-lighter padding-bottom-3 margin-bottom-2">
      <MetaLabel>{label}</MetaLabel>
      <div className="display-flex flex-wrap">{children}</div>
    </div>
  );
}

function MetaRelatedContent({ item }: { item: RelatedItem }) {
  return (
    <div className="margin-bottom-3">
      <AppLinkStyled
        href={item.href}
        className="text-ink"
        style={{
          textDecorationStyle: "dashed",
          textDecorationThickness: "1px",
          textUnderlineOffset: "3px",
        }}
      >
        <p className="font-heading-sm line-height-heading-3 text-bold margin-top-0 margin-bottom-1">
          {item.title}
        </p>
      </AppLinkStyled>
      <div className="display-flex flex-wrap">
        {item.themes.map((theme) => (
          <div key={theme} className="margin-right-1 margin-bottom-1">
            <Tag {...makeOutlineTagProps(makeThemeTagProps(theme))} />
          </div>
        ))}
        {item.categories.map((category) => (
          <div key={category} className="margin-right-1 margin-bottom-1">
            <Tag {...makeOutlineTagProps(category)} />
          </div>
        ))}
      </div>
    </div>
  );
}
