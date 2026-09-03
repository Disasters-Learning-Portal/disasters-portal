"use client";

import { CardDetailed, Pagination } from "@teamimpact/veda-ui-blocks";
import { Suspense } from "react";
import { AppLink } from "@/app/components/AppLink";
import { makeCardDetailedProps } from "@/app/site-config/content.helpers";
import type { GalleryItem } from "@/app/site-config/types";
import { useGallery } from "./useGallery";

export type GalleryProps = {
  items: GalleryItem[];
};

/**
 * useGallery reads the URL via useSearchParams, which only has a value at
 * request time. On statically prerendered pages Next.js therefore requires
 * a Suspense boundary above the call (build error otherwise); the boundary
 * lives here so every consumer gets it for free.
 */
export function Gallery(props: GalleryProps) {
  return (
    <Suspense>
      <GalleryInner {...props} />
    </Suspense>
  );
}

function GalleryInner({ items }: GalleryProps) {
  const { pageItems, totalPages, currentPage, getPageHref } = useGallery(items);

  return (
    <>
      <div className="grid-row grid-gap">
        {pageItems.map((item) => {
          const { id, ...cardProps } = makeCardDetailedProps(item);
          return (
            <div
              key={id}
              className="grid-col-12 tablet:grid-col-6 desktop:grid-col-4 margin-y-1 desktop:margin-y-2"
            >
              <CardDetailed {...cardProps} className="height-card-sm" />
            </div>
          );
        })}
      </div>
      {totalPages > 1 && (
        <Pagination
          getHref={getPageHref}
          currentPage={currentPage}
          totalPages={totalPages}
          linksAs={AppLink}
          className="margin-top-4 display-flex flex-justify-center"
        />
      )}
    </>
  );
}
