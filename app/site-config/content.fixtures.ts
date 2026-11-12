import type { GalleryCardContent } from "@/app/site-config/types";

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
