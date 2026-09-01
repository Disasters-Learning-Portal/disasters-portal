import { Gallery, PageMasthead, Section } from "@/app/components";
import { toGalleryItem } from "@/app/components/Gallery/Gallery.helpers";
import { TRAININGS, TRAININGS_EXTERNAL } from "@/app/site-config/training";
import { TRAINING_CARD_MASTHEAD } from "@/app/site-config/training/toplevel-page__card-masthead";
import { makeCardMastHeadProps } from "../site-config/content.helpers";

export default function TrainingCollectionPage() {
  const items = [...TRAININGS, ...TRAININGS_EXTERNAL].map(toGalleryItem);

  return (
    <>
      <PageMasthead {...makeCardMastHeadProps(TRAINING_CARD_MASTHEAD)} />
      <Section>
        <Gallery items={items} />
      </Section>
    </>
  );
}
