import type { CardDetailedProps, CardProps, CardSimpleProps } from "@teamimpact/veda-ui-blocks";
import { AppImage } from "@/app/components/AppImage";
import { AppLink } from "@/app/components/AppLink";
import {
  type Category,
  CONTENT_THEMES,
  CONTENT_TYPES,
  type ContentType,
  type IterableItemWithId,
  type Theme,
} from "@/app/site-config/types";

export const makeSimpleTagProps = (tag: string) => ({
  variant: "solid" as const,
  color: tag === "active" ? "secondary" : "primary-lighter",
  textColor: tag === "active" ? "white" : "primary-dark",
  children: tag,
});

export const makeThemeTagProps = (tag: Theme) => {
  const { label, color, textColor } = CONTENT_THEMES[tag];
  return { variant: "solid" as const, color, textColor, children: label };
};

export const makeContentTypeTagProps = (tag: ContentType) => {
  const { label } = CONTENT_TYPES[tag];
  return {
    variant: "solid" as const,
    color: "primary-lighter",
    textColor: "primary-dark",
    children: label,
  };
};

export type CardMastheadPropsArgs = Omit<
  CardProps,
  "title" | "image" | "colorMode" | "isMasthead"
> & {
  mastheadImage: {
    alt: string;
    src: string;
  };
  title?: string;
  theme?: Theme;
};

export const makeCardMastHeadProps = ({
  mastheadImage,
  title,
  theme,
  ...rest
}: CardMastheadPropsArgs): CardProps => ({
  image: <AppImage {...mastheadImage} sizes="100vw" fill preload={true} />,
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
  colorMode: "brand",
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
  tags?: (Theme | ContentType | Category)[];
  url?: string;
};

export const makeCardDetailedProps = ({
  id,
  contentType,
  thumbnailImage,
  tags,
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
  tags: (tags
    ? tags.map((t) => makeSimpleTagProps(t))
    : [
        ...(themes ?? []).map((t) => makeThemeTagProps(t)),
        ...(categories ?? []).map((c) => makeSimpleTagProps(c)),
        makeContentTypeTagProps(contentType),
      ]
  ).map(({ children, ...rest }) => ({ label: children, ...rest })),
  callToAction: {
    href: url ? url : `${CONTENT_TYPES[contentType].route}/${id}`,
    label: `View ${toTitleCase(CONTENT_TYPES[contentType].label)}`,
    isExternal: !!url,
    as: AppLink,
  },
  ...rest,
});

export const makeCardDetailedImageLeftProps = ({
  id,
  contentType,
  thumbnailImage,
  tags,
  themes,
  categories,
  url,
  ...rest
}: CardDetailedPropsArgs): IterableItemWithId<CardDetailedProps<typeof AppLink>> => ({
  id,
  image: <AppImage {...thumbnailImage} fill sizes="200px" />,
  imagePosition: "left",
  tags: (tags
    ? tags.map((t) => makeSimpleTagProps(t))
    : [
        ...(themes ?? []).map((t) => makeThemeTagProps(t)),
        ...(categories ?? []).map((c) => makeSimpleTagProps(c)),
        makeContentTypeTagProps(contentType),
      ]
  ).map(({ children, ...rest }) => ({ label: children, ...rest })),
  callToAction: {
    href: url ? url : `${CONTENT_TYPES[contentType].route}/${id}`,
    label: `View ${toTitleCase(CONTENT_TYPES[contentType].label)}`,
    isExternal: !!url,
    as: AppLink,
  },
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
  tag: (({ children, ...rest }) => ({ label: children, ...rest }))(
    tag
      ? makeSimpleTagProps(tag)
      : themes?.[0]
        ? makeThemeTagProps(themes[0])
        : makeContentTypeTagProps(contentType),
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
  tag: (({ children, ...rest }) => ({ label: children, ...rest }))(
    makeContentTypeTagProps(contentType),
  ),
  callToAction: {
    href: url ? url : `${CONTENT_TYPES[contentType].route}/${id}`,
    label: `View ${toTitleCase(CONTENT_TYPES[contentType].label)}`,
    isExternal: !!url,
    as: AppLink,
  },
  imagePosition: "cover",
  colorMode: "dark",
  ...rest,
});

export const toLongDate = (date: string) =>
  new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

export const toTitleCase = (str: string) =>
  str.toLowerCase().replace(/\b\w/g, (match) => match.toUpperCase());
