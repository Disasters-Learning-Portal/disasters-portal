import type { StoryContent } from "@/app/site-config/types";

export const STORY__HELPING_HAMPTON_ROADS_FACE_THE_FLOODS: StoryContent = {
  id: "helping-hampton-roads-face-the-floods",
  contentType: "story",
  title: "When the Next Flood Hits, Will Your City Be Ready?",
  subtitle: "Sea Level Rise Meets Sinking Land in a Region the Nation Depends On",
  thumbnailImage: {
    src: "/img/story/helping-hampton-roads-face-the-floods.webp",
    alt: "Floodwater covers a road intersection up to the curbside traffic signals during a storm.",
  },
  mastheadImage: {
    // TODO: the source document supplies no caption or credit for this photo. The file the
    // content team provided is named Hurricane_Isabel_flood_water; confirm the event and the
    // photo credit before launch.
    src: "/img/story/helping-hampton-roads-face-the-floods.webp",
    alt:
      "Floodwater submerges a road intersection during a storm, rising past the base of the " +
      "traffic signals and surrounding buildings and trees.",
  },
  themes: ["build"],
  categories: ["flood", "hurricane"],
  body: [
    {
      type: "text",
      paragraphs: [
        "What will it take for your city to withstand the floods of the future, not just the ones " +
          "it’s already survived?",
        "In Hampton Roads, Virginia, that question is more urgent than almost anywhere else in the " +
          "U.S. Home to more than 1.7 million people, the region sits low against the Chesapeake Bay " +
          "and the Atlantic, where sea levels are rising faster than the national average and the " +
          "ground itself is sinking beneath it. And the stakes reach far beyond local residents: " +
          "Hampton Roads is home to Naval Station Norfolk, the largest naval base in the world, and " +
          "the Port of Virginia, one of the busiest container ports on the East Coast. A major flood " +
          "here can disrupt national defense logistics and ripple through supply chains nationwide.",
      ],
    },
    {
      // TODO: the document asks for this to be a stylized, right-justified call-out box rather
      // than a plain list — "this box will appear in all the Stories of Impact as she wants them
      // all to share the same template / structure." Needs an HDS-compliant box component that
      // every Story of Impact can share; rendered as a bulleted list until that exists.
      type: "list",
      heading: "Highlights",
      items: [
        "Hampton Roads faces compounding threats that overwhelm flood defenses all at once. Rising " +
          "seas, sinking land, and storms that combine surge, rainfall, and saturated ground create " +
          "flood conditions far worse than any single hazard would produce alone.",
        "Modeling past storms helps plan for future risk. Studying what historic storms would look " +
          "like in 2050 is helping planners understand what’s coming and what mitigation steps " +
          "matter most.",
        "Local partnership makes the science actionable for real decisions. By combining local " +
          "infrastructure data with NASA’s modeling, the project is putting flood-risk tools " +
          "directly into the hands of planners, emergency managers, and communities.",
      ],
    },
    {
      type: "text",
      paragraphs: [
        "The combination of rising water and sinking land breaks an assumption many existing flood " +
          "plans make: that current flood zones and elevation maps are a reliable guide to future " +
          "risk. Many of the flood models available to planners today weren’t built to track that " +
          "changing complexity, and fewer still can show risk at the resolution that actually " +
          "matters for decision-making: down to individual streets, parcels, and neighborhoods.",
        "“When I joined NASA in 2009, watching Nor’Ida flood the city around me made it clear that " +
          "we needed a better way to plan for what was coming, not just what we’d already seen,” " +
          "says Patrick Taylor, scientist at NASA’s Langley Research Center in Hampton Roads.",
        "Through the NASA Disasters Program’s Hampton Roads Coastal Resilience project, Taylor and " +
          "his team are looking to the past to build resilience for the disasters of the future – " +
          "and the tools and techniques they’re developing can help flood-vulnerable communities " +
          "across the country.",
      ],
    },
    {
      type: "image",
      heading: "From Four Historic Storms to the Floods of 2050",
      src: "/img/story/helping-hampton-roads-face-the-floods__matthew-3d-inundation.webp",
      alt:
        "Four 3D views of the same Virginia Beach neighborhood at 00:00, 01:00, 03:00 and 05:00 UTC " +
        "on October 9, 2016, with modeled floodwater spreading through the streets and the buildings " +
        "it reaches shaded red.",
      caption:
        "Modeled flood data from 2016’s Hurricane Matthew combined with detailed 3D city data shows " +
        "flood waters inundating Virginia Beach in unprecedented detail. Credit: NASA, J. Derek " +
        "Loftis, Ph.D., Virginia Institute of Marine Science, William & Mary.",
      width: 1280,
      height: 724,
    },
    {
      type: "text",
      paragraphs: [
        "On October 9, 2016, Hurricane Matthew pushed floodwater through Virginia Beach after days " +
          "of rain had already saturated the ground. Using advanced modeling, the Hampton Roads " +
          "Coastal Resilience team reconstructed that day almost as it happened – not as a single " +
          "snapshot, but as it unfolded hour by hour.",
        "These detailed street-level flood maps turn the data into something regional planners can " +
          "learn from: not just where water eventually stood, but how it got there – which streets " +
          "flooded first, how fast water rose block by block, and how long it lingered before " +
          "receding.",
      ],
    },
    {
      // Reuses the Build Resilience theme page asset: the same VIMS max-depth map.
      // TODO: the document marks this figure as a placeholder — "We plan to replace this static
      // screenshot with an interactive flood-model timelapse, once the ODSI team has had a chance
      // to integrate the data." The approved caption below describes that timelapse, not the
      // static map standing in for it, so caption and figure should land together.
      type: "image",
      src: "/img/theme/resilience-matthew-inundation.webp",
      alt:
        "Map of central Virginia Beach shading modeled maximum flood extent and water depth during " +
        "Hurricane Matthew, with a legend grading water depth from under half a foot to more than " +
        "nine feet.",
      caption:
        "A day-by-day timelapse of modeled flood extent across the same event, viewed from above. " +
        "Credits: NASA, J. Derek Loftis, Ph.D., Virginia Institute of Marine Science, William & " +
        "Mary.",
      width: 1280,
      height: 898,
    },
    {
      type: "text",
      paragraphs: [
        "That same modeling capability is now being pointed toward the future. Matthew is one of " +
          "four historic storms the team is putting through the same test, studying what would " +
          "happen if that storm struck Hampton Roads again in 2050, after up to 1.5 feet of " +
          "projected sea level rise and years more of coastal development. The team is using those " +
          "scenarios to project how familiar storms could produce unfamiliar floods. It’s a preview " +
          "the region can study today to make decisions that mean less damage when the next storm " +
          "hits.",
      ],
    },
    {
      type: "text",
      heading: "Putting NASA Science in Your Hands",
      paragraphs: [
        "For this science to matter, it must reach the people making real decisions in a way they " +
          "can quickly use. Old Dominion University is leading an integration with the VA CORES " +
          "dashboard, bringing the project’s flood maps together with infrastructure data and social " +
          "vulnerability metrics in one place. With this tool, Hampton Roads planners can explore " +
          "future flood risk down to the parcel level to shape mitigation strategies and emergency " +
          "response plans.",
      ],
    },
    {
      type: "image",
      src: "/img/story/helping-hampton-roads-face-the-floods__va-cores-dashboard.webp",
      alt:
        "The Old Dominion University Norfolk Sea Level Rise Impact Dashboard, showing a 2060 " +
        "scenario with $549.3M in modeled damage, a parcel-level flood map, and charts breaking " +
        "down potential damage and building counts by property type.",
      caption:
        "Future flood projections and their impacts to neighborhoods shown in the VA CORES " +
        "dashboard. Credit: Old Dominion University",
      width: 936,
      height: 541,
    },
    {
      type: "text",
      paragraphs: [
        "“NASA’s satellites, airborne platforms, and models give us data no one else has,” says " +
          "Taylor, “but just as important is the power to convene cities, universities, and " +
          "community groups to the same table around a problem too large for any one of them to " +
          "solve alone.”",
        "That collaboration is already informing real decisions on the ground, from where " +
          "stormwater infrastructure gets upgraded to where nature-based defenses like marsh and " +
          "wetland restoration make the most sense. They’re the kind of decisions your own community " +
          "may be weighing right now, and NASA science can help you make them.",
        "If you’re a planner, emergency manager, or researcher working to protect your own coastal " +
          "community, the resources below can help you get started.",
      ],
    },
    {
      // TODO: same as Highlights above — the document asks for this box to be "stylized to look
      // different from the rest of the article to give visual interest."
      type: "list",
      heading: "Cornerstones",
      items: [
        "Compound flooding requires compound modeling. Real floods rarely come from a single " +
          "source. When storm surge, heavy rainfall, and saturated soil combine, the damage far " +
          "exceeds what any single hazard would produce. Models that simulate these interactions " +
          "give planners a more accurate picture of risk than traditional single-driver approaches.",
        "Meter-scale resolution transforms how planners use flood models. When models show flood " +
          "risk parcel by parcel, planners can evaluate specific infrastructure investments, compare " +
          "mitigation strategies neighborhood by neighborhood, and communicate risk in terms " +
          "residents recognize.",
        "Regional cooperation builds resilience no single city can achieve alone. Hampton Roads is " +
          "stronger when neighboring cities share infrastructure data and coordinate recovery " +
          "planning rather than working independently.",
        "Effective resilience planning serves all phases of the disaster cycle. Understanding how " +
          "hazards interact with infrastructure and affect communities differently based on exposure " +
          "and vulnerability helps cities prepare for disasters, respond effectively when they " +
          "strike, and recover faster afterward.",
      ],
    },
    {
      // Same section the home page uses for Resources & Learning. The ARSET course is
      // external, so the card carries its own url rather than resolving to /training/<id>.
      type: "sectionCardSimple",
      heading: "Resources & Learning",
      link: { href: "/training", label: "More Resources and Learning" },
      cards: [
        {
          id: "sea-level-change-tools-planning-decision-support",
          contentType: "training",
          title: "Sea Level Change Tools for Planning and Decision Support",
          thumbnailImage: {
            src: "/img/training/sea-level-change-tools.webp",
            alt:
              "Map of sea surface height anomalies across the Americas and the Atlantic, with higher " +
              "anomalies in orange and lower in blue.",
          },
          url: "https://www.earthdata.nasa.gov/learn/trainings/sea-level-change-tools-planning-decision-support",
        },
      ],
    },
  ],
};
