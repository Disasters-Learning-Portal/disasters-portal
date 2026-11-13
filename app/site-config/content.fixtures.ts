import type { Content, GalleryCardContent, ThemeContent } from "@/app/site-config/types";

export function createTestCard(
  id: string,
  overrides: Partial<GalleryCardContent> = {},
): GalleryCardContent {
  return {
    id,
    contentType: "news",
    title: `Test Card (${id})`,
    thumbnailImage: { src: "/thumb.jpg", alt: "Thumbnail" },
    themes: [],
    categories: [],
    ...overrides,
  };
}

// Every entry exported from a `<type>__<name>` file, so new content is tested without listing it
const modules = import.meta.glob<Record<string, unknown>>("./*/*__*.{ts,tsx}", { eager: true });

export const ALL_CONTENT = Object.values(modules)
  .flatMap((exports) => Object.values(exports))
  .filter(
    (value): value is Content | ThemeContent =>
      typeof value === "object" && value !== null && "id" in value,
  );
