"use client";

import { CardDetailed } from "@teamimpact/veda-ui-blocks";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { makeGalleryCardProps } from "@/app/site-config/content.helpers";
import type { GalleryItem } from "@/app/site-config/types";
import { getPaginationState, parsePageParam } from "./Gallery.helpers";
import { PaginationBar } from "./PaginationBar";

export type GalleryProps = {
  items: GalleryItem[];
};

/**
 * GalleryInner reads the page from the URL via useSearchParams, which only
 * has a value at request time. On statically prerendered pages Next.js
 * therefore requires a Suspense boundary above the call (build error
 * otherwise); the boundary lives here so every consumer gets it for free.
 */
export function Gallery(props: GalleryProps) {
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
