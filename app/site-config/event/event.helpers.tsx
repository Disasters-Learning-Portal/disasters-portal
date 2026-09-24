import { type CardProps, type CardSimpleProps, Link } from "@teamimpact/veda-ui-blocks";
import type { AppLink } from "@/app/components/AppLink";
import type { SidebarDetail } from "@/app/components/PageSidebar";
import {
  makeCardMastHeadProps,
  makeCardSimpleProps,
  makeTextTagProps,
  toLongDate,
} from "@/app/site-config/content.helpers";
import type { EventContent, IterableItemWithId } from "@/app/site-config/types";

export const transformEventToCardSimpleProps = (
  event: EventContent,
): IterableItemWithId<CardSimpleProps<typeof AppLink>> => {
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
  const { region, startDate, linkDHSFEMA, linkUSGovernment } = event;

  return [
    { label: "Region", content: region },
    { label: "Start Date", content: toLongDate(startDate) },
    linkDHSFEMA
      ? {
          label: "What DHS and FEMA are doing",
          content: (
            <Link variant="text" isExternal href={linkDHSFEMA.href}>
              {linkDHSFEMA.label}
            </Link>
          ),
        }
      : null,
    linkUSGovernment
      ? {
          label: "What the U.S. government is doing",
          content: (
            <Link variant="text" isExternal href={linkUSGovernment.href}>
              {linkUSGovernment.label}
            </Link>
          ),
        }
      : null,
  ].filter((detail): detail is NonNullable<typeof detail> => detail !== null);
};
