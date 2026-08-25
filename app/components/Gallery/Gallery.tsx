"use client";

import { CardDetailed } from "@teamimpact/veda-ui-blocks";
import { useSearchParams } from "next/navigation";
import { makeGalleryCardProps } from "@/app/site-config/content.helpers";
import { type GalleryItem, paginate, parsePage } from "./Gallery.helpers";
import { PaginationBar } from "./PaginationBar";

export type GalleryProps = {
  // Plain serializable card data; use toGalleryItem() to derive from content
  // objects. Callers pre-filter (e.g. news-events contenttype) before passing.
  items: GalleryItem[];
};

/** Paginated card grid driven by the `page` query param. Filters land in later PRs (#372). */
export function Gallery({ items }: GalleryProps) {
  const searchParams = useSearchParams();
  const page = parsePage(searchParams);
  const { pageItems, totalPages, currentPage } = paginate(items, page);

  return (
    <>
      <div className="grid-row grid-gap">
        {pageItems.map((item) => (
          <div
            key={item.id}
            className="grid-col-12 tablet:grid-col-6 desktop:grid-col-4 margin-y-1 desktop:margin-y-2"
          >
            <CardDetailed {...makeGalleryCardProps(item)} className="height-full" />
          </div>
        ))}
      </div>
      <PaginationBar currentPage={currentPage} totalPages={totalPages} />
    </>
  );
}
