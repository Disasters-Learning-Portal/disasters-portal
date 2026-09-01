"use client";

import { CardDetailed } from "@teamimpact/veda-ui-blocks";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { makeGalleryCardProps } from "@/app/site-config/content.helpers";
import { type GalleryItem, getPaginationState, parsePageParam } from "./Gallery.helpers";
import { PaginationBar } from "./PaginationBar";

export type GalleryProps = {
  // Plain serializable card data; use toGalleryItem() to derive from content
  // objects. Callers pre-filter (e.g. news-events contenttype) before passing.
  items: GalleryItem[];
};

/** Paginated card grid driven by the `page` query param. Filters land in later PRs (#372). */
export function Gallery(props: GalleryProps) {
  // useSearchParams needs a Suspense boundary above it on statically
  // prerendered pages; owning it here keeps pages from having to remember it.
  return (
    <Suspense>
      <GalleryInner {...props} />
    </Suspense>
  );
}

function GalleryInner({ items }: GalleryProps) {
  const searchParams = useSearchParams();
  const requestedPage = parsePageParam(searchParams);
  const { pageItems, totalPages, currentPage } = getPaginationState(items, requestedPage);

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
