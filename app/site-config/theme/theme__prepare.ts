import type { ThemeContent } from "@/app/site-config/types";

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
      cards: [
        {
          id: "your-community-may-have-a-disaster-blind-spot",
          contentType: "story",
          title: "Your Community May Have a Disaster Blind Spot. Foresight is Built to Find It.",
          thumbnailImage: {
            src: "/img/story/your-community-may-have-a-disaster-blind-spot.webp",
            alt: "A deep fissure splits a cobblestone street after an earthquake, with an overturned cart tipped into the crack and damaged buildings beyond.",
          },
        },
      ],
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
      cards: [
        {
          id: "monitoring-predicting-floods-using-earth-observations-planning-preparedness",
          contentType: "training",
          title:
            "Monitoring and Predicting Floods Using Earth Observations for Planning and Preparedness",
          thumbnailImage: {
            src: "/img/training/monitoring-predicting-floods.webp",
            alt: "False-color satellite view of a flooded river system, with standing water in dark blue against tan terrain and green vegetation.",
          },
          url: "https://www.earthdata.nasa.gov/learn/trainings/monitoring-predicting-floods-using-earth-observations-planning-preparedness",
        },
        {
          id: "fundamentals-remote-sensing",
          contentType: "training",
          title: "Fundamentals of Remote Sensing",
          thumbnailImage: {
            src: "/img/training/fundamentals-remote-sensing.webp",
            alt: "NISAR satellite orbiting Earth",
          },
          url: "https://www.earthdata.nasa.gov/learn/trainings/fundamentals-remote-sensing",
        },
      ],
    },
  ],
} as const;
