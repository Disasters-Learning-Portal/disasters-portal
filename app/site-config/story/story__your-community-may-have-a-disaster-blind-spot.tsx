import { Link } from "@teamimpact/veda-ui-blocks";
import { Fragment } from "react";
import type { StoryContent } from "@/app/site-config/types";

export const STORY__YOUR_COMMUNITY_MAY_HAVE_A_DISASTER_BLIND_SPOT: StoryContent = {
  id: "your-community-may-have-a-disaster-blind-spot",
  contentType: "story",
  title: "Your Community May Have a Disaster Blind Spot. ",
  subtitle: "Foresight is Built to Find It.",
  thumbnailImage: {
    src: "/img/story/your-community-may-have-a-disaster-blind-spot.webp",
    alt: "A deep fissure splits a cobblestone street after an earthquake, with an overturned cart tipped into the crack and damaged buildings beyond.",
  },
  mastheadImage: {
    src: "/img/story/your-community-may-have-a-disaster-blind-spot.webp",
    alt: "A black and white photo shows a wagon falling into a fissure in one of San Francisco's streets that was caused by a historic earthquake, April 18, 1906. Credit: Sonoma County Library Photograph Collection",
  },
  themes: ["prepare"],
  categories: ["heat", "flood", "severe weather"],
  body: [
    {
      type: "text",
      heading: "The Gap Between What Has Happened and What Could",
      paragraphs: [
        "Are the communities you serve prepared for what could happen — or only for what has happened before?",
      ],
    },
    {
      type: "list",
      heading: "Highlights",
      items: [
        "Disaster preparedness systems built on historical records have a blind spot — and it is growing. Extreme events are intensifying faster than communities can accumulate experience with them, which means the gap between what disaster managers have planned for and what is now possible has been silently widening.",
        "Foresight in Disaster Management is a NASA Disasters Program project building a science-based foundation for planning beyond the historical record. Led by Tufts University, Foresight identifies plausible extreme events that communities haven’t experienced yet — but that today’s conditions can credibly produce.",
        "The project is building a new dynamic scenario planning tool to put that science foundation directly into the hands of disaster managers and planning teams. This Scenario Library will give practitioners the ability to use NASA and other trusted data to simulate extreme events and stress-test their preparedness strategies against realistic potential future scenarios that historical records alone may obscure.",
      ],
    },
    {
      type: "text",
      paragraphs: [
        "For most disaster managers, contingency planning starts with history: the storms, floods, and heat events that shaped a region’s experience and informed its preparedness systems. That foundation has served the field for a long time, but in a changing Earth system environment, it is no longer enough. Extreme events are intensifying faster than communities can gain experience with them. In many places, the frequency and intensity of hazards have been climbing gradually — not through obvious landmark disasters that demand attention, but year by year, in ways that don’t register until something arrives that the plan wasn’t built for.",
        "“Disaster planning based on historical events is like driving forward while only looking in the rearview mirror,” says Erin Coughlan de Perez, Associate Professor at Tufts University Friedman School of Nutrition Science and Policy and principal investigator on the project. “Many communities are planning for what they have seen in the past, only slightly worse. They need to be preparing for things they haven’t seen at all.”",
        "Foresight in Disaster Management is a NASA Disasters Program Science-to-Action (DS2A) project working to close that gap. Led by the team at Tufts and working in collaboration with Spelman College, Oregon State University, the American Red Cross, and UNHCR (the Office of the United Nations High Commissioner for Refugees), Foresight is building a science-based foundation for anticipating extreme events that have no precedent in a community’s local history — but that today’s climate has made entirely plausible.",
      ],
    },
    {
      type: "image",
      src: "/img/story/your-community-may-have-a-disaster-blind-spot__storm-on-the-horizon.webp",
      alt: "A powerful thunderstorm with lightning approaches on the horizon at sunset over a desert highway near Belen, New Mexico, Jul 27, 2019. Credit: Raychel Sanner/Pexels",
      caption:
        "The storm is already on the horizon. The question is whether the plan was built for it. Credit: Raychel Sanner/Pexels",
      width: 1280,
      height: 840,
    },
    {
      type: "text",
      heading: "Seeing Past the Historical Horizon",
      paragraphs: [
        "Foresight pursues that goal through three interconnected aims.",
        <Fragment key="seeing-past-the-historical-horizon-unseen">
          The first is to map the space of what is actually possible. Using NASA Earth observation
          data alongside large ensemble climate and weather models, the team applies the{" "}
          <Link href="https://unseen-open.readthedocs.io/en/latest/Whats-unseen.html">UNSEEN</Link>{" "}
          (UNprecedented Simulated Extremes using Ensemble) approach to generate distributions of
          extreme events that are consistent with today’s climate conditions but absent from the
          historical record. The outputs are not forecasts. They are plausible scenarios: events
          that are physically consistent with what the science says the climate of a specific
          location can actually produce. Plausible, here, is a precise term: a scenario developed
          for a community reflects what the hazard environment of that region genuinely supports,
          such as an unprecedented heatwave in Florida. Scenarios that would defy the physical
          realities of the models, such as a hurricane in Idaho, are not generated.
        </Fragment>,
        "The second aim is harder to quantify but just as important: how prepared are communities actually? Through interviews, focus groups, and document analysis, the Foresight team assesses community capacities, and documents what could go wrong. Some communities carry recent experience with severe events and maintain active preparedness. Others have seen disaster risk rise but have not recently experienced the kind of dramatic event that prompts updated planning. These communities face what the team calls a “high potential for surprise,” that is, places where the most extreme event in living memory may no longer reflect how risky conditions have become. As Coughlan de Perez describes it, for communities across the southeastern United States: “It’s a roll of the die whether they have experienced a really extreme event or not.”",
        "The third aim turns that analysis into something practitioners can effectively use. Working with disaster management stakeholders, the team co-develops event-based storylines of extreme events — detailed, plausible narratives grounded in UNSEEN outputs — for use in scenario planning exercises. The storylines give practitioners something specific to plan against: a realistic account of what a severe event could look like in their community, under current conditions, and what it would ask of their systems and their partners. Disaster managers give feedback on results throughout and help shape the final products. The science is being built with the people who will use it.",
      ],
    },
    {
      type: "image",
      src: "/img/story/your-community-may-have-a-disaster-blind-spot__yazoo-city-scenario-exercise.webp",
      alt: "Community members seated around tables in a meeting room take part in a disaster scenario exercise.",
      caption:
        "Community members in Yazoo City, Mississippi participate in a disaster scenario exercise with the project team, led by Tufts University, Aug. 10, 2023. Photo provided by Erin Coughlan de Perez, Tufts University",
      width: 975,
      height: 731,
    },
    {
      type: "image",
      src: "/img/story/your-community-may-have-a-disaster-blind-spot__yazoo-city-food-distribution.webp",
      alt: "A woman carries paper grocery bags toward a doorway while distributing food from a pantry.",
      caption:
        "Evangelist Catherine Cowans, Founder of True Light Ministry, distributes food to a person in need in Yazoo City, Mississippi. Disaster scenario exercises that involve the community enable better understanding of what actions to take, who to contact, and where to go in the event of a disaster. Photo provided by Erin Coughlan de Perez, Tufts University",
      width: 649,
      height: 865,
    },
    {
      type: "text",
      heading: "From Simulation to Preparation",
      paragraphs: [
        "That working relationship with practitioners in their communities is now shaping one of the project’s most practical developments.",
        "The Scenario Library is a dynamic scenario planning platform being built by the team in collaboration with the American Red Cross, UNHCR, and the Massachusetts Office of Climate Science. The new tool will fuse NASA Earth observation data with climate science, geospatial analysis, and social systems analysis — giving disaster managers the ability to run simulations of plausible extreme events and stress-test their preparedness strategies against conditions that no historical dataset can supply.",
        "The practical range of what that enables is worth contemplating for a moment. A disaster manager could explore whether existing cooling shelter contracts are sized for a heatwave that outlasts anything on record. A planner making long-range infrastructure decisions could examine how current hazard probabilities should shape where new facilities are built and to what standard. An anticipatory action team could use scenario outputs to set new response thresholds for events with no local precedent — so that when conditions exceed anything the community has seen before, the response is already mapped out. For communities that may be already stretched thin on preparedness, the gap between having a plan and not having one shows up in very real ways — like whether cooling centers open in time, whether evacuation routes are mapped before they are needed, or whether the people most at risk have somewhere to go.",
      ],
    },
    {
      type: "list",
      heading: "Cornerstones",
      items: [
        "If your community hasn’t faced a severe event recently, that may be cause for concern, not comfort. Communities where recent history has been quiet are often the ones who haven’t updated their plans. The absence of a recent disaster does not mean that risk has disappeared.",
        "Scenarios are planning tools, not forecasts — use them accordingly. Foresight’s outputs describe what is plausible given current conditions in a specific location, not what is predicted to happen in the coming days or months. The right question to bring to them is not “will this happen?” but “are we ready if it does?”",
        "Policies addressing extreme heat and flooding remain limited in many parts of the United States. The science for anticipating these events is advancing faster than the policy frameworks designed to act on it, and there are major policy gaps for preparedness for extreme heat across the country.",
        "Early awareness of tools in development is an advantage worth acting on. The Foresight Tool is still being built. Practitioners who engage now — understanding what it is designed to do and how it fits into existing preparedness workflows — will be better positioned to use it effectively when it becomes available.",
      ],
    },
    {
      type: "text",
      paragraphs: [
        "“Our ultimate goal,” Coughlan de Perez says, “is to provide a framework to help all communities prepare for weather events they may not have experienced before but have a high likelihood of facing in the future.”",
        "There’s something almost counterintuitive about what Foresight is trying to do. Its most consequential work isn’t done in the aftermath of a disaster — it’s done in those places where calm has come to feel normal, before anything has arrived to disturb it. The Foresight Tool is being built for those communities. Where plans can still be written before they are needed.",
      ],
    },
    {
      type: "image",
      heading: "Explore the Foresight Tool",
      src: "/img/story/your-community-may-have-a-disaster-blind-spot__scenario-library.webp",
      alt: "A mock-up of the Foresight in Disaster Management Scenario Library interface, showing a tabletop exercise scenario broken into timed injects.",
      width: 1000,
      height: 2152,
    },
    {
      // Same section the home page uses for Resources & Learning: SectionCardSimple
      // via the sectionCardSimple block. The four training videos are not published
      // yet, so each carries the placeholder image; swap in real thumbnails, and
      // register the trainings, once they are available.
      type: "sectionCardSimple",
      heading: "Resources & Learning",
      link: { href: "/training", label: "More Resources and Learning" },
      cards: [
        {
          id: "introduction-to-the-foresight-tool",
          contentType: "training",
          title: "Introduction to the Foresight Tool",
          thumbnailImage: {
            src: "/img/placeholder/card-masthead.webp",
            alt: "Placeholder image for the Introduction to the Foresight Tool training video",
          },
        },
        {
          id: "how-to-incorporate-science-into-scenario-exercises",
          contentType: "training",
          title: "How to Incorporate Science into Scenario Exercises",
          thumbnailImage: {
            src: "/img/placeholder/card-masthead.webp",
            alt: "Placeholder image for the How to Incorporate Science into Scenario Exercises training video",
          },
        },
        {
          id: "intensifying-extremes",
          contentType: "training",
          title: "Intensifying Extremes",
          thumbnailImage: {
            src: "/img/placeholder/card-masthead.webp",
            alt: "Placeholder image for the Intensifying Extremes training video",
          },
        },
        {
          id: "community-capacities",
          contentType: "training",
          title: "Community Capacities",
          thumbnailImage: {
            src: "/img/placeholder/card-masthead.webp",
            alt: "Placeholder image for the Community Capacities training video",
          },
        },
      ],
    },
    {
      type: "text",
      heading: "Connect and Learn More",
      paragraphs: [
        <Fragment key="connect-email-the-developers">
          Would you like to help test or provide feedback on the new Foresight dynamic scenario
          planning tool or Scenario Library as they are still being developed?{" "}
          <Link href="mailto:Erin.Coughlan@tufts.edu">Email the developers.</Link>
        </Fragment>,
        <Fragment key="connect-about-the-pi">
          About the PI: The Foresight project is led by{" "}
          <Link href="https://nutrition.tufts.edu/academics/faculty/erin-coughlan-de-perez">
            Erin Coughlan de Perez
          </Link>{" "}
          at Tufts University.
        </Fragment>,
      ],
    },
  ],
};
