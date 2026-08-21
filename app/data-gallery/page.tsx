import { CardDetailed } from "@teamimpact/veda-ui-blocks";
import { PageMasthead, Section } from "@/app/components";
import {
  makeCardDetailedImageLeftProps,
  makeCardMastHeadProps,
} from "@/app/site-config/content.helpers";
import { DATA } from "@/app/site-config/data";
import { DATA_GALLERY_CARD_MASTHEAD } from "@/app/site-config/data/toplevel-page__card-masthead";

export default function DataGalleryPage() {
  return (
    <>
      <PageMasthead {...makeCardMastHeadProps(DATA_GALLERY_CARD_MASTHEAD)} />
      <Section>
        <div className="grid-row grid-gap">
          {DATA.map(
            ({ id, contentType, title, description, thumbnailImage, categories, themes }) => (
              <div key={id} className="grid-col-12 margin-y-1 desktop:margin-y-2">
                <CardDetailed
                  {...makeCardDetailedImageLeftProps({
                    id,
                    contentType,
                    title,
                    description,
                    thumbnailImage,
                    categories,
                    themes,
                  })}
                  className="height-card-sm"
                />
              </div>
            ),
          )}
        </div>
      </Section>
    </>
  );
}
