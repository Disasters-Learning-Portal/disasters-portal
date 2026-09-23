import type {
  CardDetailedProps,
  CardProps,
  CardSimpleProps,
  TagProps,
} from "@teamimpact/veda-ui-blocks";
import { AppImage } from "@/app/components/AppImage";
import { AppLink } from "@/app/components/AppLink";
import {
  type Category,
  CONTENT_THEMES,
  CONTENT_TYPES,
  type Content,
  type ContentType,
  type DateString,
  type GalleryCardContent,
  type IterableItemWithId,
  type Theme,
} from "@/app/site-config/types";
import { isInternalContent, pickKeys } from "./typed.helpers";

export const makeOutlineTagProps = (
  tag: string,
  tagProps?: Omit<TagProps, "variant" | "size" | "onClose" | "children">,
) => ({
  variant: "outline" as const,
  borderColor: "base-light" as const,
  children: tag,
  ...tagProps,
});

export const makeTextTagProps = (
  tag: string,
  tagProps?: Omit<TagProps, "variant" | "size" | "onClose" | "children">,
) => ({
  variant: "text" as const,
  children: tag,
  ...tagProps,
});

// Tag takes its text as `children`, a Card wants it as `label`.
const childrenToLabel = <T extends { children: string }>({ children, ...rest }: T) => ({
  label: children,
  ...rest,
});

const makeDateTagProps = (date: DateString) =>
  childrenToLabel(makeTextTagProps(`Published: ${toNASAStyleDate(date)}`));

export const makeThemeTagProps = (tag: Theme) => {
  const { label } = CONTENT_THEMES[tag];
  return label;
};

export const makeContentTypeTagProps = (tag: ContentType) => {
  const { label } = CONTENT_TYPES[tag];
  return label;
};

export type CardMastheadPropsArgs = Omit<
  CardProps,
  "title" | "image" | "colorMode" | "isMastHead" | "tag"
> & {
  mastheadImage: {
    alt: string;
    src: string;
  };
  title?: string;
  theme?: Theme;
  datePublished?: DateString;
};

export const makeCardMastHeadProps = ({
  mastheadImage,
  title,
  theme,
  datePublished,
  ...rest
}: CardMastheadPropsArgs): CardProps => ({
  className: "blocks-card--contentpage",
  image: <AppImage {...mastheadImage} sizes="100vw" fill preload={true} />,
  tag: datePublished && makeDateTagProps(datePublished),
  ...(title || theme
    ? {
        title: (
          <h1
            className={`font-mono-3xl text-normal text-white text-uppercase flex-align-self-start margin-0 ${theme ? `bg-${CONTENT_THEMES[theme].color} text-ls-3` : ""}`}
          >
            {title ?? theme}
          </h1>
        ),
      }
    : {}),
  colorMode: "dark",
  isMastHead: true,
  ...rest,
});

export type CardFeaturedPropsArgs = Omit<
  CardProps,
  "image" | "imagePosition" | "callToAction" | "callToActionSecondary"
> & {
  id: string;
  callToAction?: {
    label: string;
    href: string;
  };
  callToActionSecondary?: {
    label: string;
    href: string;
  };
  image: {
    alt: string;
    src: string;
  };
  imagePosition?: "left" | "right";
};

export const makeCardFeaturedProps = (
  props: CardFeaturedPropsArgs,
): IterableItemWithId<CardProps<typeof AppLink, typeof AppLink>> => {
  const {
    id,
    callToAction,
    callToActionSecondary,
    image,
    imagePosition = "right",
    ...rest
  } = props;
  return {
    id,
    callToAction: callToAction && { ...callToAction, as: AppLink },
    callToActionSecondary: callToActionSecondary && { ...callToActionSecondary, as: AppLink },
    image: (
      <AppImage
        alt={image.alt}
        src={image.src}
        sizes="(max-width: 640px) 100vw, (max-width: 1400px) 50vw, 700px"
        fill
        style={{ objectFit: "cover" }}
      />
    ),
    imagePosition,
    ...rest,
  };
};

/**
 * Project a content entry down to the card fields the Gallery needs.
 * Gallery is a client component, so pages (server components) can only
 * pass it serializable props: Content extras like ContentBlock bodies
 * carry JSX and cannot cross the server -> client boundary.
 */
export const makeGalleryCardContent = (content: Content): GalleryCardContent => {
  const base = pickKeys(content, [
    "id",
    "contentType",
    "title",
    "description",
    "thumbnailImage",
    "themes",
    "categories",
  ]);
  return isInternalContent(content) ? base : { ...base, url: content.url };
};

export type CardDetailedPropsArgs = Omit<
  CardDetailedProps,
  "image" | "imagePosition" | "tags" | "callToAction"
> & {
  id: string;
  contentType: ContentType;
  thumbnailImage: {
    alt: string;
    src: string;
  };
  themes?: Theme[];
  categories?: Category[];
  url?: string;
};

const makeCardCTAProps = ({
  id,
  contentType,
  url,
}: {
  id: string;
  contentType: ContentType;
  url?: string;
}) => ({
  href: url ? url : `${CONTENT_TYPES[contentType].route}/${id}`,
  label: `View ${toTitleCase(CONTENT_TYPES[contentType].label)}`,
  isExternal: !!url,
  as: AppLink,
});

const makeCardTagProps = (themes: Theme[] = [], categories: Category[] = [], type: ContentType) =>
  [
    ...themes.map((t) => makeOutlineTagProps(makeThemeTagProps(t))),
    ...categories.map((c) => makeOutlineTagProps(c)),
    makeOutlineTagProps(makeContentTypeTagProps(type)),
  ].map(childrenToLabel);

export const makeCardDetailedProps = ({
  id,
  contentType,
  thumbnailImage,
  themes,
  categories,
  url,
  ...rest
}: CardDetailedPropsArgs): IterableItemWithId<CardDetailedProps<typeof AppLink>> => ({
  id,
  image: (
    <AppImage
      {...thumbnailImage}
      fill
      sizes="(max-width: 640px) 100vw, (max-width: 1400px) 50vw, 700px"
    />
  ),
  imagePosition: "top",
  tags: makeCardTagProps(themes, categories, contentType),
  callToAction: makeCardCTAProps({ id, contentType, url }),
  ...rest,
});

export const makeCardDetailedImageLeftProps = ({
  id,
  contentType,
  thumbnailImage,
  themes,
  categories,
  url,
  ...rest
}: CardDetailedPropsArgs): IterableItemWithId<CardDetailedProps<typeof AppLink>> => ({
  id,
  image: <AppImage {...thumbnailImage} fill sizes="200px" />,
  imagePosition: "left",
  tags: makeCardTagProps(themes, categories, contentType),
  callToAction: makeCardCTAProps({ id, contentType, url }),
  ...rest,
});

export type CardSimplePropsArgs = Omit<
  CardSimpleProps,
  "image" | "tag" | "isExternal" | "href" | "as"
> & {
  id: string;
  contentType: ContentType;
  thumbnailImage: {
    alt: string;
    src: string;
  };
  tag?: Theme | ContentType | Category | "active";
  themes?: Theme[];
  url?: string;
};

export const makeCardSimpleProps = ({
  id,
  contentType,
  thumbnailImage,
  tag,
  themes,
  url,
  ...rest
}: CardSimplePropsArgs): IterableItemWithId<CardSimpleProps<typeof AppLink>> => ({
  id,
  image: <AppImage {...thumbnailImage} fill sizes="(max-width: 1400px) 100vw, 1400px" />,
  colorMode: "dark",
  // tag is set on active event
  tag: childrenToLabel(
    tag
      ? makeTextTagProps(tag)
      : themes?.[0]
        ? makeTextTagProps(makeThemeTagProps(themes[0]))
        : makeTextTagProps(makeContentTypeTagProps(contentType)),
  ),
  href: url ? url : `${CONTENT_TYPES[contentType].route}/${id}`,
  isExternal: !!url,
  as: AppLink,
  ...rest,
});

type CardCarouselPropsArgs = Omit<
  CardProps,
  "image" | "imagePosition" | "tag" | "callToAction" | "colorMode"
> & {
  id: string;
  contentType: ContentType;
  thumbnailImage: {
    alt: string;
    src: string;
  };
  url?: string;
};

export const makeCardCarouselProps = ({
  id,
  contentType,
  thumbnailImage,
  url,
  ...rest
}: CardCarouselPropsArgs): IterableItemWithId<CardProps<typeof AppLink>> => ({
  id,
  image: (
    <AppImage
      {...thumbnailImage}
      fill
      sizes="(max-width: 640px) 100vw, (max-width: 1400px) 50vw, 700px"
    />
  ),
  tag: childrenToLabel(makeOutlineTagProps(makeContentTypeTagProps(contentType))),
  callToAction: makeCardCTAProps({ id, contentType, url }),
  imagePosition: "cover",
  colorMode: "dark",
  ...rest,
});

/**
 * NASA Stylebook and Communications Manual, 13th edition (February 2025) / AP style:
 * abbreviate Jan., Feb., Aug., Sept., Oct., Nov. and Dec., spell the rest out.
 * https://github.com/Disasters-Learning-Portal/disasters-portal/issues/479
 *
 * Formatted in UTC so the day never shifts.
 */
export const toNASAStyleDate = (date: DateString) => {
  const d = new Date(date);
  const months = [
    "Jan.",
    "Feb.",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Aug.",
    "Sept.",
    "Oct.",
    "Nov.",
    "Dec.",
  ];
  return `${months[d.getUTCMonth()]} ${d.getUTCDate()}, ${d.getUTCFullYear()}`;
};

export const toTitleCase = (str: string) =>
  str.toLowerCase().replace(/\b\w/g, (match) => match.toUpperCase());
