import { type CardProps, Link } from "@teamimpact/veda-ui-blocks";
import type { SidebarDetail } from "@/app/components/PageSidebar";
import {
  makeCardMastHeadProps,
  makeCardSimpleProps,
  makeTextTagProps,
  toLongDate,
} from "@/app/site-config/content.helpers";
import type { EventContent } from "@/app/site-config/types";

export const transformEventToCardSimpleProps = (
  event: EventContent,
): ReturnType<typeof makeCardSimpleProps> => {
  const { isLatest, id, contentType, thumbnailImage, title } = event;
  return makeCardSimpleProps({
    id,
    contentType,
    thumbnailImage,
    title,
    ...(isLatest ? { tag: "active" } : {}),
  });
};

export const transformEventToPageMastHeadProps = (event: EventContent): CardProps => {
  const { lastUpdatedDate, mastheadImage, title, description } = event;

  return makeCardMastHeadProps({
    mastheadImage,
    title,
    description,
    tag: lastUpdatedDate
      ? (({ children, ...rest }) => ({ label: children, ...rest }))(
          makeTextTagProps(`Updated: ${toLongDate(lastUpdatedDate)}`),
        )
      : undefined,
  });
};

export const transformEventToPageSidebarDetails = (event: EventContent): SidebarDetail[] => {
  const { region, startDate } = event;

  return [
    { label: "Region", content: region },
    { label: "Start Date", content: toLongDate(startDate) },
  ];
};

export type SectionOverviewItemProps = {
  overviewItems: { title: string; content: React.ReactNode }[];
};

export const transformEventToSectionOverviewProps = (
  event: EventContent,
): SectionOverviewItemProps => {
  const { linkDHSFEMA, linkUSGovernment } = event;

  return {
    overviewItems: [
      linkUSGovernment
        ? {
            title: "What the U.S. government is doing",
            content: (
              <Link
                variant="text"
                className="text-ink text-bold"
                isExternal
                href={linkUSGovernment.href}
              >
                {linkUSGovernment.label ?? "Read more"}
              </Link>
            ),
          }
        : null,
      linkDHSFEMA
        ? {
            title: "What DHS and FEMA are doing",
            content: (
              <Link
                variant="text"
                className="text-ink text-bold"
                isExternal
                href={linkDHSFEMA.href}
              >
                {linkDHSFEMA.label ?? "Read more"}
              </Link>
            ),
          }
        : null,
    ].filter((item): item is NonNullable<typeof item> => item !== null),
  };
};
