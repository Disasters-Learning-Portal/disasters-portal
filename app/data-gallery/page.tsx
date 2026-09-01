import { Gallery, PageMasthead, Section } from "@/app/components";
import { toGalleryItem } from "@/app/components/Gallery/Gallery.helpers";
import { makeCardMastHeadProps } from "@/app/site-config/content.helpers";
import { DATA } from "@/app/site-config/data";
import { DATA_GALLERY_CARD_MASTHEAD } from "@/app/site-config/data/toplevel-page__card-masthead";

export default function DataGalleryPage() {
  return (
    <>
      <PageMasthead {...makeCardMastHeadProps(DATA_GALLERY_CARD_MASTHEAD)} />
      <Section>
        <Gallery items={DATA.map(toGalleryItem)} />
      </Section>
    </>
  );
}
