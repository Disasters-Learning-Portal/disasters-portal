import { notFound } from "next/navigation";
import { PrintDocument } from "@/app/components/PrintDocument";
import { TRAININGS } from "@/app/site-config/training";
import { isInternalContent } from "@/app/site-config/typed.helpers";

/**
 * A training rendered as a standalone document, without site chrome.
 *
 * The render target for printing: PrintLink loads it into an offscreen frame
 * from the training page and prints that, so this is never shown to a reader.
 */
export default async function TrainingPrintPage(props: PageProps<"/training/[id]/print">) {
  const { id } = await props.params;
  const contentItem = TRAININGS.filter(isInternalContent).find((t) => t.id === id);

  if (!contentItem?.body || !contentItem?.pdfLink) notFound();

  return (
    <PrintDocument
      title={contentItem.title}
      subtitle={contentItem.subtitle}
      body={contentItem.body}
    />
  );
}
