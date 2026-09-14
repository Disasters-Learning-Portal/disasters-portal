"use client";

import { CardDetailed, Pagination } from "@teamimpact/veda-ui-blocks";
import { usePathname, useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { AppLink } from "@/app/components/AppLink";
import { makeCardDetailedProps } from "@/app/site-config/content.helpers";
import type { GalleryCard } from "@/app/site-config/types";
import {
  getPaginationState,
  PAGE_PARAM,
  PRESERVED_PARAMS,
  parsePageParam,
} from "./Gallery.helpers";

export type GalleryProps = {
  items: GalleryCard[];
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
  const pathname = usePathname();
  const requestedPage = parsePageParam(searchParams);
  const { pageItems, totalPages, currentPage } = getPaginationState(items, requestedPage);

  // Link-based pagination: hrefs carry only gallery-owned params (see
  // PRESERVED_PARAMS) so filters survive page changes but stray params don't.
  const getHref = (page: number) => {
    const params = new URLSearchParams();
    for (const key of PRESERVED_PARAMS) {
      const value = searchParams.get(key);
      if (value !== null) params.set(key, value);
    }
    if (page <= 1) {
      params.delete(PAGE_PARAM);
    } else {
      params.set(PAGE_PARAM, String(page));
    }
    const queryString = params.toString();
    return queryString ? `?${queryString}` : pathname;
  };

  return (
    <>
      <div className="grid-row grid-gap">
        {pageItems.map((item) => {
          const { id, ...cardProps } = makeCardDetailedProps(item);
          return (
            <div
              key={id}
              className="display-flex grid-col-12 tablet:grid-col-6 desktop:grid-col-4 margin-y-1 desktop:margin-y-2"
            >
              <CardDetailed {...cardProps} />
            </div>
          );
        })}
      </div>
      {totalPages > 1 && (
        <Pagination
          getHref={getHref}
          currentPage={currentPage}
          totalPages={totalPages}
          linksAs={AppLink}
          className="margin-top-4 display-flex flex-justify-center"
        />
      )}
    </>
  );
}
