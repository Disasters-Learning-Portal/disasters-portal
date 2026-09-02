"use client";

import { CardDetailed, Pagination } from "@teamimpact/veda-ui-blocks";
import { Suspense } from "react";
import { AppLink } from "@/app/components/AppLink";
import { makeCardDetailedProps } from "@/app/site-config/content.helpers";
import type { GalleryItem } from "@/app/site-config/types";
import { FilterToolbar } from "./FilterToolbar";
import { useGallery } from "./hooks/useGallery";

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
  const gallery = useGallery(items);

  return (
    <>
      <FilterToolbar gallery={gallery} />
      <div className="grid-row grid-gap">
        {gallery.pageItems.map((item) => {
          const { id, ...cardProps } = makeCardDetailedProps(item);
          return (
            <div
              key={id}
              className="grid-col-12 tablet:grid-col-6 desktop:grid-col-4 margin-y-1 desktop:margin-y-2"
            >
              <CardDetailed {...cardProps} className="height-full" />
            </div>
          );
        })}
      </div>
      {gallery.totalPages > 1 && (
        <Pagination
          getHref={gallery.getPageHref}
          currentPage={gallery.currentPage}
          totalPages={gallery.totalPages}
          linksAs={AppLink}
          className="margin-top-4 display-flex flex-justify-center"
        />
      )}
    </>
  );
}
