import { Link } from "@teamimpact/veda-ui-blocks";
import type { ContentBlock } from "@/app/site-config/types";

export const ABOUT_TEAM = [
  {
    name: "Shanna N. McClain, PhD",
    role: "Disasters Program Manager",
    image: "/img/about/shanna-mcclain.png",
  },
  {
    name: "Ronan Lucey",
    role: "Associate Program Manager, Disasters PORTAL",
    image: "/img/about/ronan-lucey.png",
  },
  {
    name: "Eleanor Pierel",
    role: "Deputy Program Manager",
    image: "/img/about/eleanor-pierel.png",
  },
  {
    name: "Joshua Barners",
    role: "Associate Program Manager, Disasters Response Coordination System",
    image: "/img/about/joshua-barners.png",
  },
  {
    name: "Robert Emberson",
    role: "Deputy Program Manager, Disasters Science to Action",
    image: "/img/about/robert-emberson.png",
  },
];

export const ABOUT_PAGE_BODY: ContentBlock[] = [
  {
    type: "text",
    heading: "Connect with Us",
    paragraphs: [
      `Collaboration drives impact. We welcome partners across government, academia, and industry
        to connect with us, share perspectives, and help shape how Earth science is applied before,
        during, and after disasters. Together, we build a growing community committed to improving
        decision-making and outcomes for communities at risk.`,
      <Link
        key="newsletter"
        variant="arrow"
        color="secondary"
        href="https://lp.constantcontactpages.com/sl/ICIOyJI"
        rel="noopener noreferrer"
        target="_blank"
      >
        Get News & Updates with the NASA Disasters Community Newsletter
      </Link>,
      <Link key="contact" variant="arrow" color="secondary" href="mailto:disasters@nasa.gov">
        Contact Our Team
      </Link>,
    ],
  },
];
