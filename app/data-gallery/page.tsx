import { CardDetailed } from "@teamimpact/veda-ui-blocks";
import { PageMasthead, Section } from "@/app/components";
import { DATA_GALLERY_CARD_MASTHEAD } from "@/app/site-config/dataset/toplevel-page__card-masthead";
import {
  makeCardDetailedImageLeftProps,
  makeCardMastHeadProps,
} from "../site-config/content.helpers";
import { DATA } from "../site-config/dataset";

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
