import { Carousel } from "@teamimpact/veda-ui-blocks";
import {
  ImageComparison,
  Section,
  SectionCardDetailed,
  SectionCardFeatured,
  SectionCardSimple,
  SectionHeading,
} from "@/app/components";
import { AppImage } from "@/app/components/AppImage";
import { AppLinkStyled } from "@/app/components/AppLink";
import { AppVideo } from "@/app/components/AppVideo";
import { StacCompareBlock, StacSingleLayerBlock } from "@/app/components/blocks";
import {
  makeCardDetailedImageLeftProps,
  makeCardFeaturedProps,
  makeCardSimpleProps,
} from "@/app/site-config/content.helpers";
import type { ContentBlock } from "@/app/site-config/types";

type ListLink = { label: string; href: string };

const isListLink = (item: unknown): item is ListLink =>
  typeof item === "object" && item !== null && "href" in item;

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
            <SectionHeading headingAs={block.headingLevel}>{block.heading}</SectionHeading>
          )}
          {block.paragraphs.map((p, i) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: static content, never reorders
            <p key={i} className="font-body-sm line-height-body-5">
              {p}
            </p>
          ))}
        </Section>
      );

    case "list":
      return (
        <Section isMultiColumnLayout={isMultiColumnLayout}>
          {block.heading && (
            <SectionHeading headingAs={block.headingLevel}>{block.heading}</SectionHeading>
          )}
          <ul className="usa-list">
            {block.items.map((item, i) =>
              isListLink(item) ? (
                <li key={item.href}>
                  <AppLinkStyled href={item.href}>{item.label}</AppLinkStyled>
                </li>
              ) : (
                // biome-ignore lint/suspicious/noArrayIndexKey: static content, never reorders
                <li key={i}>{item}</li>
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
          {block.heading && (
            <SectionHeading headingAs={block.headingLevel}>{block.heading}</SectionHeading>
          )}
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
            <SectionHeading headingAs={block.headingLevel}>{block.heading}</SectionHeading>
          )}
          <figure className="margin-0">
            <AppVideo src={block.src} controls className="width-full display-block">
              <track kind="captions" />
            </AppVideo>
            {block.caption && (
              <figcaption className="font-body-3xs line-height-body-3 measure-6 text-base-dark margin-top-1">
                {block.caption}
              </figcaption>
            )}
          </figure>
        </Section>
      );

    case "image":
      return (
        <Section isMultiColumnLayout={isMultiColumnLayout}>
          {block.heading && (
            <SectionHeading headingAs={block.headingLevel}>{block.heading}</SectionHeading>
          )}
          <figure className="margin-0">
            <AppImage
              src={block.src}
              alt={block.alt}
              width={block.width}
              height={block.height}
              className={`width-full height-auto ${block.maxWidth ? `maxw-${block.maxWidth}` : ""}`}
            />
            {block.caption && (
              <figcaption className="font-body-3xs line-height-body-3 measure-6 text-base-dark margin-top-1">
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
            <SectionHeading headingAs={block.headingLevel}>{block.heading}</SectionHeading>
          )}
          <figure className="margin-0">
            <StacSingleLayerBlock block={block} />
          </figure>
        </Section>
      );

    case "stacCompare":
      return (
        <Section isMultiColumnLayout={isMultiColumnLayout}>
          {block.heading && (
            <SectionHeading headingAs={block.headingLevel}>{block.heading}</SectionHeading>
          )}
          <figure className="margin-0">
            <StacCompareBlock block={block} />
          </figure>
        </Section>
      );

    case "sectionCardSimple": {
      const cards = block.cards.map(
        ({ id, contentType, themes, thumbnailImage, title, ...rest }) => ({
          ...makeCardSimpleProps({
            id,
            contentType,
            themes,
            thumbnailImage,
            title,
            url: "url" in rest ? rest.url : undefined,
          }),
          // Card titles sit under the block's h2 section heading.
          // This should enforce that they sit at h3.
          titleAs: "h3" as const,
        }),
      );

      return (
        <SectionCardSimple
          isMultiColumnLayout={isMultiColumnLayout}
          sectionHeading={
            block.heading && (
              <SectionHeading headingAs={block.headingLevel} linkProps={block.link}>
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
            // The section heading is h2, so card titles must be h3.
            // CardDetailed has no titleAs option. This should be dropped if
            // it ever becomes available.
            title: (
              <h3 className="blocks-card-detailed__title" title={title}>
                {title}
              </h3>
            ),
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
              <SectionHeading headingAs={block.headingLevel} linkProps={block.link}>
                {block.heading}
              </SectionHeading>
            )
          }
          cards={cards}
        />
      );
    }

    case "carousel":
      return (
        <Section isMultiColumnLayout={isMultiColumnLayout}>
          {block.heading && (
            <SectionHeading headingAs={block.headingLevel}>{block.heading}</SectionHeading>
          )}
          <Carousel
            maxVisibleItems={block.maxVisibleItems ?? 2}
            items={block.items.map(({ title, description, thumbnailImage, tag }) => ({
              // The section heading is h2, so card titles must be h3.
              title: <h3 className="blocks-card__title">{title}</h3>,
              description,
              image: <AppImage {...thumbnailImage} fill sizes="(max-width: 640px) 100vw, 50vw" />,
              ...(tag ? { tag: { label: tag } } : {}),
            }))}
          />
        </Section>
      );

    case "sectionCardFeatured":
      return (
        <SectionCardFeatured
          isMultiColumnLayout={isMultiColumnLayout}
          card={makeCardFeaturedProps({
            ...block.card,
            // The section heading is h2, so card titles must be h3.
            // Card has no titleAs option. This should be dropped if
            // it ever becomes available.
            title: <h3 className="blocks-card__title">{block.card.title}</h3>,
          })}
        />
      );
  }
};
