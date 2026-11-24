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
    horizontalImage: { src: "/horizontal.jpg", alt: "Horizontal" },
    verticalImage: { src: "/vertical.jpg", alt: "Vertical" },
    themes: [],
    categories: [],
    ...overrides,
  };
}
