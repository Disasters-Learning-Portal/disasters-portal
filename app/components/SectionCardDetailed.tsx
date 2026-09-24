"use client";

import { CardDetailed, type CardDetailedProps, Pagination } from "@teamimpact/veda-ui-blocks";
import { usePathname, useSearchParams } from "next/navigation";
import { type ComponentProps, type ReactNode, Suspense } from "react";
import { AppLink } from "@/app/components/AppLink";
import { getPaginationState } from "@/app/components/Gallery/helpers/pagination.helpers";
import {
  buildPageHref,
  PAGE_PARAM,
  parsePageParam,
} from "@/app/components/Gallery/helpers/url.helpers";
import type { IterableItemWithId } from "@/app/site-config/types";
// Imported directly rather than through "@/app/components": this is a client
// module, and the barrel would drag every server component in it (and the
// ContentBlockRenderer -> SectionCardDetailed cycle) into the client graph.
import { Section, type SectionProps } from "./Section";

type SectionCardDetailedCards = IterableItemWithId<CardDetailedProps<typeof AppLink>>[];

type PagerState = {
  currentPage: number;
  totalPages: number;
  getHref: (page: number) => string;
};

type SectionCardDetailedProps = SectionProps & {
  sectionHeading?: ReactNode;
  cards: SectionCardDetailedCards;
  /** Cards per page. Omitted, every card renders in one run. */
  pageSize?: number;
};

/**
 * next/link scrolls back to the top of the document on navigation. This pager
 * sits well down a content page, so hold the viewport still; only the cards
 * directly above it change.
 */
const PagerLink = (props: ComponentProps<typeof AppLink>) => <AppLink {...props} scroll={false} />;

/**
 * Card gallery section. With `pageSize` set it shows one page of cards at a
 * time under the same Pagination control as the data gallery, paging on the
 * shared `?page=` search param.
 */
export const SectionCardDetailed = ({ pageSize, ...props }: SectionCardDetailedProps) => {
  if (pageSize === undefined || props.cards.length <= pageSize) {
    return <SectionCardDetailedView {...props} />;
  }

  // useSearchParams has no value while a page is prerendered, so Next requires
  // a Suspense boundary above it. The fallback is the first page, which keeps
  // the cards in the prerendered HTML instead of blanking the section.
  return (
    <Suspense
      fallback={
        <SectionCardDetailedView
          {...props}
          cards={props.cards.slice(0, pageSize)}
          pager={{
            currentPage: 1,
            totalPages: Math.ceil(props.cards.length / pageSize),
            getHref: (page) => `?${PAGE_PARAM}=${page}`,
          }}
        />
      }
    >
      <PagedSectionCardDetailed {...props} pageSize={pageSize} />
    </Suspense>
  );
};

function PagedSectionCardDetailed({
  cards,
  pageSize,
  ...props
}: SectionCardDetailedProps & { pageSize: number }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { pageItems, currentPage, totalPages } = getPaginationState(
    cards,
    parsePageParam(searchParams),
    pageSize,
  );

  return (
    <SectionCardDetailedView
      {...props}
      cards={pageItems}
      pager={{
        currentPage,
        totalPages,
        getHref: (page) => buildPageHref(searchParams, pathname, page),
      }}
    />
  );
}

function SectionCardDetailedView({
  sectionHeading,
  cards,
  pager,
  children,
  ...sectionProps
}: Omit<SectionCardDetailedProps, "pageSize"> & { pager?: PagerState }) {
  return (
    <Section {...sectionProps}>
      {sectionHeading && sectionHeading}
      <div className="grid-row grid-gap">
        {cards.map(({ id, ...props }) => (
          <div key={id} className="grid-col-12 margin-y-1 desktop:margin-y-2">
            <CardDetailed {...props} className="height-card-sm" />
          </div>
        ))}
      </div>
      {pager && pager.totalPages > 1 && (
        <Pagination
          getHref={pager.getHref}
          currentPage={pager.currentPage}
          totalPages={pager.totalPages}
          linksAs={PagerLink}
          className="margin-top-4 display-flex flex-justify-center"
        />
      )}
      {children}
    </Section>
  );
}
