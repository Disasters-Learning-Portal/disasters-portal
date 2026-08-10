import { PageMasthead, SectionCardDetailed } from "@/app/components";
import { DATA_GALLERY_CARD_MASTHEAD } from "@/app/site-config/dataset/toplevel-page__card-masthead";
import { typedMap } from "@/app/site-config/typed.helpers";
import {
  makeCardDetailedImageLeftProps,
  makeCardMastHeadProps,
} from "../site-config/content.helpers";
import { DATASETS } from "../site-config/dataset";

export default function DataGalleryPage() {
  return (
    <>
      <PageMasthead {...makeCardMastHeadProps(DATA_GALLERY_CARD_MASTHEAD)} />
      <SectionCardDetailed cards={typedMap(DATASETS, makeCardDetailedImageLeftProps)} />
    </>
  );
}
