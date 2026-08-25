"use client";

import { Pagination } from "@teamimpact/veda-ui-blocks";
import { usePathname, useSearchParams } from "next/navigation";
import { AppLink } from "../AppLink";
import { PAGE_PARAM } from "./Gallery.helpers";

type PaginationBarProps = {
  currentPage: number;
  totalPages: number;
};

/**
 * Link-based pagination: hrefs are built from the current query string so
 * every other param (filters, contenttype) survives page changes.
 */
export function PaginationBar({ currentPage, totalPages }: PaginationBarProps) {
  const searchParams = useSearchParams();
  const pathname = usePathname();

  if (totalPages <= 1) return null;

  const getHref = (page: number) => {
    const params = new URLSearchParams(searchParams);
    if (page <= 1) {
      params.delete(PAGE_PARAM);
    } else {
      params.set(PAGE_PARAM, String(page));
    }
    const queryString = params.toString();
    return queryString ? `?${queryString}` : pathname;
  };

  return (
    <Pagination
      getHref={getHref}
      currentPage={currentPage}
      totalPages={totalPages}
      linksAs={AppLink}
      className="margin-top-4 display-flex flex-justify-center"
    />
  );
}
