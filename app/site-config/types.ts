import type {
  GeoConfigProviderProps,
  StacCompareMapProps,
  StacSingleLayerMapProps,
} from "@teamimpact/veda-ui-blocks";
import type { ReactNode } from "react";
import type { AppRoutes } from "@/.next/types/routes";
import type {
  CardDetailedPropsArgs,
  CardFeaturedPropsArgs,
  CardSimplePropsArgs,
} from "@/app/site-config/content.helpers";

export const CONTENT_TYPES: Record<ContentType, { route: AppRoutes; label: string }> = {
  data: { route: "/data-gallery", label: "data" },
  event: { route: "/news-events-stories", label: "event" },
  news: { route: "/news-events-stories", label: "news" },
  story: { route: "/news-events-stories", label: "story" },
  datastory: { route: "/news-events-stories", label: "data story" },
  training: { route: "/training", label: "training" },
};

export const SHOW_IN_PAGE_NAVIGATION_CONTENT_TYPES: ContentType[] = [
  "event",
  "news",
  "story",
  "datastory",
  "training",
];

export type Theme = "respond" | "build" | "prepare" | "recover";

export const CONTENT_THEMES: Record<Theme, { label: string; color?: string }> = {
  respond: {
    label: "Respond",
    color: "secondary",
  },
  build: {
    label: "Build resilience",
    color: "success",
  },
  prepare: {
    label: "Prepare",
    color: "accent-warm",
  },
  recover: {
    label: "Recover",
    color: "accent-cool",
  },
};

export const CONTENT_CATEGORIES = [
  "earthquake",
  "fire",
  "flood",
  "heat",
  "landslide",
  "severe weather",
  "tropical cyclone",
  "hurricane",
  "typhoon",
  "cyclone",
  "volcano",
  "tsunami",
  "winter weather",
] as const;

export type Category = (typeof CONTENT_CATEGORIES)[number];

export type GalleryRoute = "/data-gallery" | "/news-events-stories" | "/training"; // TODO: update to be dynamic

type GeoConfig = Omit<GeoConfigProviderProps, "children">;

export type ContentBlock =
  | {
      type: "text";
      heading?: string;
      headingLevel?: "h2" | "h3" | "h4";
      paragraphs: ReactNode[];
    }
  | {
      type: "list";
      heading?: string;
      headingLevel?: "h2" | "h3" | "h4";
      items: (string | { label: string; href: string })[];
    }
  | { type: "note"; heading?: string; headingLevel?: "h2" | "h3" | "h4"; text: string }
  | {
      type: "slider";
      heading?: string;
      headingLevel?: "h2" | "h3" | "h4";
      before: { src: string; alt: string };
      after: { src: string; alt: string };
    }
  | {
      type: "video";
      heading?: string;
      headingLevel?: "h2" | "h3" | "h4";
      src: string;
      caption?: string;
    }
  | {
      type: "image";
      heading?: string;
      headingLevel?: "h2" | "h3" | "h4";
      src: string;
      alt: string;
      width: number;
      height: number;
      /** USWDS maxw-* token. The image fills the column unless capped here. */
      maxWidth?: "card" | "card-lg" | "mobile" | "mobile-lg" | "tablet";
      caption?: string;
    }
  | (StacSingleLayerMapProps &
      GeoConfig & {
        type: "stacSingleLayer";
        heading?: string;
        headingLevel?: "h2" | "h3" | "h4";
      })
  | (StacCompareMapProps &
      GeoConfig & {
        type: "stacCompare";
        heading?: string;
        headingLevel?: "h2" | "h3" | "h4";
      })
  | {
      type: "sectionCardSimple";
      heading?: string;
      headingLevel?: "h2" | "h3" | "h4";
      href?: GalleryRoute;
      cards: CardSimplePropsArgs[];
    }
  | {
      type: "sectionCardGallery";
      heading?: string;
      headingLevel?: "h2" | "h3" | "h4";
      href?: GalleryRoute;
      cards: (Omit<CardDetailedPropsArgs, "title"> & { title: string })[];
    }
  | {
      type: "sectionCardFeatured";
      heading?: string;
      headingLevel?: "h2" | "h3" | "h4";
      card: Omit<CardFeaturedPropsArgs, "title"> & { title: string };
    };

/**
 * Content dates, authored as `YYYY-MM-DD` and formatted at render time.
 *
 * Checks shape, not the calendar: 2026-02-30 passes. Years stay at 20xx to keep
 * the union small enough for TypeScript to represent (ts2590).
 */
type OneToNine = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
type ZeroToNine = 0 | OneToNine;
type YYYY = `20${ZeroToNine}${ZeroToNine}`;
type MM = `0${OneToNine}` | `1${0 | 1 | 2}`;
type DD = `0${OneToNine}` | `${1 | 2}${ZeroToNine}` | `3${0 | 1}`;
export type DateString = `${YYYY}-${MM}-${DD}`;

export type InternalCardContent = {
  id: string;
  contentType: ContentType;
  title: string;
  thumbnailImage: {
    src: string;
    alt: string;
  };
  themes: Theme[];
  categories: Category[];
  description?: string;
  datePublished?: DateString;
};

export type ExternalCardContent = InternalCardContent & { url: string };

export type GalleryCardContent = InternalCardContent | ExternalCardContent;

export type TrainingContent = Omit<InternalCardContent, "contentType"> & {
  contentType: "training";
  datePublished: DateString;
  mastheadImage: MastheadImage;
  body?: ContentBlock[]; // TODO: require body
  relatedContent?: string[];
};

export type TrainingContentExternal = Omit<ExternalCardContent, "contentType"> & {
  contentType: "training";
};

export type DataContent = Omit<InternalCardContent, "contentType"> & {
  contentType: "data";
  mastheadImage: MastheadImage;
  body?: ContentBlock[]; // TODO: require body
  relatedContent?: string[];
  /** The sidebar CTA renders only when this is set. */
  exploreDataUrl?: string;
};

export type NewsContent = Omit<InternalCardContent, "contentType"> & {
  contentType: "news";
  mastheadImage: MastheadImage;
  body?: ContentBlock[]; // TODO: require body
};

export type StoryContent = Omit<InternalCardContent, "contentType"> & {
  contentType: "story";
  mastheadImage: MastheadImage;
  body?: ContentBlock[]; // TODO: require body
};

export type DataStoryContent = Omit<InternalCardContent, "contentType"> & {
  contentType: "datastory";
  mastheadImage: MastheadImage;
  body?: ContentBlock[]; // TODO: require body
};

export type DataStoryContentExternal = Omit<ExternalCardContent, "contentType"> & {
  contentType: "datastory";
};

export type EventContent = Omit<InternalCardContent, "contentType"> & {
  contentType: "event";
  mastheadImage: MastheadImage;
  isLatest?: boolean;
  startDate: DateString;
  region: string;
  linkDHSFEMA?: { label: string; href: string };
  linkUSGovernment?: { label: string; href: string };
  body?: ContentBlock[]; // TODO: require body
  relatedContent?: string[];
};

export type InternalContent =
  | DataContent
  | StoryContent
  | DataStoryContent
  | NewsContent
  | EventContent
  | TrainingContent;

export type ExternalContent = DataStoryContentExternal | TrainingContentExternal;

export type Content = InternalContent | ExternalContent;

export type ContentType = Content["contentType"];

export type ThemeContent = {
  id: string;
  title?: string;
  subtitle: string;
  mastheadImage: MastheadImage;
  theme: Theme;
  body: ContentBlock[];
};

type MastheadImage = {
  src: string;
  alt: string;
  caption?: string;
  attribution?: string;
};

export type IterableItemWithId<T> = T & { id: string };
