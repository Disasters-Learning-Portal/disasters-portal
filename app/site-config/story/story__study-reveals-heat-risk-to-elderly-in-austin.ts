import type { StoryContent } from "../types";

export const STORY__STUDY_REVEALS_HEAT_RISK_ELDERLY_AUSTIN: StoryContent = {
  id: "study-reveals-heat-risk-to-elderly-in-austin",
  contentType: "story",
  title:
    "Study Reveals Heat Risk to Elderly in 85% of Austin Single-Family Homes During Power Outages",
  date: "2026-04-13",
  description:
    "For most people, home is where they go to escape the heat. But for older adults in Austin, Texas, a new study reveals that staying indoors during extreme heat may carry unexpected risks.",
  thumbnailImage: {
    src: "/img/story/austin-heat-risk.webp",
    alt: "Photo of the Austin, Texas skyline",
  },
  mastheadImage: {
    src: "/img/story/austin-heat-risk.webp",
    alt: "Photo of the Austin, Texas skyline",
  },
  themes: ["build"],
  categories: ["heat"],
  body: [
    {
      type: "text",
      paragraphs: [
        "For most people, home is where they go to escape the heat. But for older adults in Austin, Texas, a new study reveals that staying indoors during extreme heat may carry unexpected risks.",
        "A study published in Building and Environment found that 85% of Austin's single-family homes could pose a significant risk of death to elderly occupants during a three-day extreme heat event – temperatures exceeding 110°F – with no power. The finding challenges a common assumption about indoor safety during heat emergencies. As temperatures climb further, the risk expands well beyond the elderly, reaching younger populations too. And looking ahead, heatwave frequency in Austin could double by the year 2100, at which point nearly every single-family home in the city could face some level of heat risk.",
        "The study, led by Calvin Lin and Zoltan Nagy at the University of Texas at Austin, is the first to assess indoor heat vulnerability for each single-family home across an entire city – and the approach can be applied to most U.S. cities. The work was made possible through the Austin CARES (Climate Adaptation and Resilient communitiES) project, led by UT's Jackson School of Geosciences Prof. Dev Niyogi and supported in part by NASA's Disasters Program. The team combined satellite Earth observation data with Travis County Appraisal District building records to model indoor heat conditions at scale. Using publicly available data, they matched all 213,626 of Austin's single-family homes to 717 building models based on attributes such as construction year, window quality, number of floors, square footage, and roof type. By pairing what satellites reveal about local climate patterns with what building records show about construction and design, the team could map heat vulnerability block by block. Rundberg and St. John's neighborhoods emerged as the most at risk.",
        "Perhaps more critical for long-term planning, the study identifies a large category of buildings that currently maintain marginal safety during extreme heat events but are projected to cross into dangerous thresholds as temperatures rise and urbanization continues. For city planners, that distinction between today’s manageable risk and tomorrow’s crisis is where investment decisions begin – whether in targeted building retrofits, emergency planning or building code updates.",
        "Much like flood-plain mapping guides investment in flood-prone areas, this work gives city leaders a tool to better understand where resources are needed most. The City of Austin is already acting on these findings through the UT-City Climate CoLab partnership, using the data to direct cooling centers, home weatherization programs, and strategic tree planting to vulnerable neighborhoods – without requiring door-to-door surveys to find them.",
      ],
    },
    {
      type: "image",
      src: "/img/story/austin-heat-risk__risk-map.webp",
      alt: "A graphic from the Building and Environment study showing extreme heat risk at the neighborhood scale in Austin, Texas",
      width: 1400,
      height: 1283,
      maxWidth: "40rem",
      caption:
        "A graphic from the study published Feb. 1, 2026 in Building and Environment, shows (a), (c) Median extreme heat risk at the neighborhood scale during the extreme event (Heatwave + power outage), (b), (d) Increase (in %) of extreme heat risk due to additional urban heating or climatic shifts. Credits: From comfort to survival: Indoor heat vulnerability during extreme events, Calvin J. Lin, Drury B. Crawley, Marc Coudert, Dev Niyogi, Zoltan Nagy",
    },
    {
      type: "text",
      paragraphs: [
        "The study drew coverage from Austin news stations KXAN and KVUE. In a report by KXAN, Prof. Niyogi framed the ambition: “We are elevating the problem. Rather than saying, ‘Austin is hot. We need to cool it,’ we're saying, ‘Here's where we need to focus. And here are the kind of solutions we can do.’”",
        "Dr. Robert Emberson, NASA Disasters Deputy Program Manager, sees Austin CARES as a model worth following: “What makes this work compelling is that the data needed to protect communities often already exists – it just hasn't been connected yet. When researchers combine Earth observation data with local records like building assessments, they can surface insights that are immediately useful to the people making decisions on the ground. Austin CARES is a strong example of that, and the approach is directly transferable to cities facing similar challenges anywhere in the country.”",
        "Read the full study in Building and Environment.",
      ],
    },
  ],
};
