import {
  ImageComparison,
  Section,
  SectionCardDetailed,
  SectionCardFeatured,
  SectionCardSimple,
  SectionHeading,
} from "@/app/components";
import { AppLinkStyled } from "@/app/components/AppLink";
import { AppVideo } from "@/app/components/AppVideo";
import { StacCompareBlock, StacSingleLayerBlock } from "@/app/components/blocks";
import { Image } from "@/app/components/Image";
import {
  makeCardDetailedImageLeftProps,
  makeCardFeaturedProps,
  makeCardSimpleProps,
} from "@/app/site-config/content.helpers";
import type { ContentBlock } from "@/app/site-config/types";

function ContentHeading({
  heading,
  headingLevel,
}: {
  heading: string;
  headingLevel?: "h2" | "h3" | "h4";
}) {
  if (headingLevel === "h4") return <h4 className="font-heading-lg margin-bottom-1">{heading}</h4>;

  if (headingLevel === "h3") return <h3 className="font-heading-lg margin-bottom-1">{heading}</h3>;

  return <SectionHeading>{heading}</SectionHeading>;
}

export const ContentBlockRenderer = ({
  block,
  isMultiColumnLayout,
}: {
  block: ContentBlock;
  isMultiColumnLayout?: boolean;
}) => {
  switch (block.type) {
    case "text":
      return (
        <Section isMultiColumnLayout={isMultiColumnLayout}>
          {block.heading && (
            <ContentHeading heading={block.heading} headingLevel={block.headingLevel} />
          )}
          {block.paragraphs.map((p, i) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: static content, never reorders
            <p key={i}>{p}</p>
          ))}
        </Section>
      );

    case "list":
      return (
        <Section isMultiColumnLayout={isMultiColumnLayout}>
          {block.heading && (
            <ContentHeading heading={block.heading} headingLevel={block.headingLevel} />
          )}
          <ul className="usa-list">
            {block.items.map((item, i) =>
              typeof item === "string" ? (
                // biome-ignore lint/suspicious/noArrayIndexKey: static content, never reorders
                <li key={i}>{item}</li>
              ) : (
                <li key={item.href}>
                  <AppLinkStyled href={item.href}>{item.label}</AppLinkStyled>
                </li>
              ),
            )}
          </ul>
        </Section>
      );

    case "note":
      return (
        <Section isMultiColumnLayout={isMultiColumnLayout}>
          <div role="note" className="usa-alert usa-alert--info usa-alert--slim margin-bottom-4">
            <div className="usa-alert__body">
              <p className="usa-alert__text">{block.text}</p>
            </div>
          </div>
        </Section>
      );

    case "slider":
      return (
        <Section isMultiColumnLayout={isMultiColumnLayout}>
          <ImageComparison
            before={block.before}
            after={block.after}
            sizes="(max-width: 1024px) 100vw, 768px"
          />
        </Section>
      );

    case "video":
      return (
        <Section isMultiColumnLayout={isMultiColumnLayout}>
          {block.heading && (
            <ContentHeading heading={block.heading} headingLevel={block.headingLevel} />
          )}
          {block.src ? (
            <AppVideo src={block.src} controls className="width-full display-block">
              <track kind="captions" />
            </AppVideo>
          ) : (
            <div className="width-full bg-base-lightest display-flex flex-align-center flex-justify-center height-card padding-x-4">
              <p className="text-base margin-0">Video coming soon</p>
            </div>
          )}
          {block.caption && <p className="font-body-sm text-base margin-top-1">{block.caption}</p>}
        </Section>
      );

    case "image":
      return (
        <Section isMultiColumnLayout={isMultiColumnLayout}>
          <figure className="margin-0">
            <Image
              src={block.src}
              alt={block.alt}
              width={block.width}
              height={block.height}
              style={{ width: block.maxWidth ?? "100%", height: "auto" }}
            />
            {block.caption && (
              <figcaption className="font-body-sm text-base margin-top-1">
                {block.caption}
              </figcaption>
            )}
          </figure>
        </Section>
      );

    case "stacSingleLayer":
      return (
        <Section isMultiColumnLayout={isMultiColumnLayout}>
          {block.heading && (
            <ContentHeading heading={block.heading} headingLevel={block.headingLevel} />
          )}
          <figure className="margin-0">
            <StacSingleLayerBlock block={block} />
            {block.caption && (
              <figcaption className="font-body-sm text-base margin-top-1">
                {block.caption}
              </figcaption>
            )}
          </figure>
        </Section>
      );

    case "stacCompare":
      return (
        <Section isMultiColumnLayout={isMultiColumnLayout}>
          {block.heading && (
            <ContentHeading heading={block.heading} headingLevel={block.headingLevel} />
          )}
          <figure className="margin-0">
            <StacCompareBlock block={block} />
            {block.caption && (
              <figcaption className="font-body-sm text-base margin-top-1">
                {block.caption}
              </figcaption>
            )}
          </figure>
        </Section>
      );

    case "sectionCardSimple": {
      const cards = block.cards.map(({ id, contentType, themes, thumbnailImage, title, ...rest }) =>
        makeCardSimpleProps({
          id,
          contentType,
          themes,
          thumbnailImage,
          title,
          url: "url" in rest ? rest.url : undefined,
        }),
      );

      return (
        <SectionCardSimple
          isMultiColumnLayout={isMultiColumnLayout}
          sectionHeading={
            block.heading && (
              <SectionHeading {...(block.href ? { href: block.href } : {})}>
                {block.heading}
              </SectionHeading>
            )
          }
          cards={cards}
        />
      );
    }

    case "sectionCardGallery": {
      const cards = block.cards.map(
        ({ id, contentType, title, description, thumbnailImage, categories, themes, ...rest }) =>
          makeCardDetailedImageLeftProps({
            id,
            contentType,
            title,
            description,
            thumbnailImage,
            themes,
            categories,
            url: "url" in rest ? rest.url : undefined,
          }),
      );

      return (
        <SectionCardDetailed
          isMultiColumnLayout={isMultiColumnLayout}
          sectionHeading={
            block.heading && (
              <SectionHeading {...(block.href ? { href: block.href } : {})}>
                {block.heading}
              </SectionHeading>
            )
          }
          cards={cards}
        />
      );
    }

    case "sectionCardFeatured":
      return (
        <SectionCardFeatured
          isMultiColumnLayout={isMultiColumnLayout}
          card={makeCardFeaturedProps(block.card)}
        />
      );
  }
};
