import { Suspense } from "react";
import { Gallery, Section } from "@/app/components";
import { toGalleryItem } from "@/app/components/Gallery/Gallery.helpers";
import { DATA } from "@/app/site-config/data";
import { DATASTORIES } from "@/app/site-config/datastory";
import { EVENTS } from "@/app/site-config/event";
import { NEWS } from "@/app/site-config/news";
import { STORIES } from "@/app/site-config/story";
import { TRAININGS, TRAININGS_EXTERNAL } from "@/app/site-config/training";

// Unlinked sandbox route for developing the reusable gallery (issue #372).
// Mixes every content collection so pagination and filters have enough items.
export default function SandboxGalleryPage() {
  const items = [
    ...DATA,
    ...NEWS,
    ...STORIES,
    ...DATASTORIES,
    ...EVENTS,
    ...TRAININGS,
    ...TRAININGS_EXTERNAL,
  ].map(toGalleryItem);

  return (
    <Section>
      <h1>Gallery Sandbox</h1>
      <Suspense>
        <Gallery items={items} />
      </Suspense>
    </Section>
  );
}
