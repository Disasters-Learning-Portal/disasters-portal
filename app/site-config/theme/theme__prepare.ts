import { STORY__YOUR_COMMUNITY_MAY_HAVE_A_DISASTER_BLIND_SPOT } from "@/app/site-config/story/story__your-community-may-have-a-disaster-blind-spot";
import { TRAINING__PORTAL_101 } from "@/app/site-config/training/training__portal-101";
import { pickKeys } from "@/app/site-config/typed.helpers";
import type { ThemeContent } from "@/app/site-config/types";
import { TRAINING__MONITORING_PREDICTING_FLOODS } from "../training/training__monitoring-predicting-floods";

export const PREPARE_CONTENT: ThemeContent = {
  id: "prepare",
  mastheadImage: {
    alt: "A shelf cloud at the leading edge of an advancing thunderstorm sweeps over a city skyline at dusk.",
    src: "/img/theme/prepare-masthead.webp",
  },
  subtitle: "Anticipate risk and boost readiness",
  theme: "prepare",
  body: [
    {
      type: "sectionCardSimple",
      heading: "Stories of Impact",
      link: { href: "/news-events-stories?type=story", label: "More Stories of Impact" },
      cards: [STORY__YOUR_COMMUNITY_MAY_HAVE_A_DISASTER_BLIND_SPOT].map((i) =>
        pickKeys(i, ["id", "contentType", "thumbnailImage", "themes", "title", "subtitle"]),
      ),
    },
    {
      type: "image",
      heading: "Data Visualization",
      src: "/img/theme/prepare-unseen-rainfall.webp",
      alt: "Six paneled maps of Southern Africa and Southeast Asia comparing observed extreme one-day rainfall with UNSEEN simulated rainfall, showing where simulations exceed the observational record.",
      width: 1280,
      height: 595,
      caption:
        "These maps compare extreme rainfall observed from 1981–2024 with modeled rainfall generated using the UNprecedented Simulated Extreme ENsemble (UNSEEN) approach for Southern Africa (top) and Southeast Asia (bottom). The left panels (a & d) show the highest observed one-day rainfall; the middle panels (b and e) show how often UNSEEN simulations exceeded that historical maximum; and the right panels (c and f) show how much larger the most extreme simulated rainfall was compared with the observed record. In several areas, the simulations produce record-breaking rainfall — and in some locations, amounts several times greater than anything in the observational record. These gaps reveal places where history may provide an incomplete picture of present-day risk, helping scientists and disaster managers develop realistic scenarios to stress-test plans and prepare for extreme events communities have not yet experienced. Credit: NASA Disasters Program; Erin Coughlan de Perez.",
    },
    {
      type: "sectionCardSimple",
      heading: "Resources & Learning",
      link: { href: "/training", label: "More Resources and Learning" },
      cards: [TRAINING__PORTAL_101, TRAINING__MONITORING_PREDICTING_FLOODS].map(
        (i) => pickKeys(i, ["id", "contentType", "thumbnailImage", "themes", "title", "subtitle"]),
      ),
    },
  ],
} as const;
