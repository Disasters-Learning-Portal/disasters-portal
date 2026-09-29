import { Link } from "@teamimpact/veda-ui-blocks";
import { Section } from "@/app/components";
import { AppImage } from "@/app/components/AppImage";
import { ABOUT_TEAM } from "@/app/site-config/about";

export default function AboutPage() {
  return (
    <div className="margin-y-10">
      <Section>
        <AppImage
          src="/img/logo-emblem-primary.svg"
          alt="NASA Disasters Program emblem"
          width={134}
          height={138}
          className="display-block"
        />
        <h1 className="font-heading-2xl margin-bottom-2">About the NASA Disasters Program</h1>
        <h2 className="font-heading-md margin-y-1">Advancing Science for Disaster Resilience</h2>
        <p className="measure-6 line-height-sans-5 margin-top-0">
          The NASA Disasters Program puts Earth science to work for those who make critical
          decisions before, during, and after disasters. We translate NASA's unmatched view of Earth
          from space into actionable insights, helping emergency managers, government agencies, and
          industry partners prepare for high-impact hazards, respond effectively when disasters
          strike, and recover more fully in their aftermath. From hurricanes and volcanoes to floods
          and earthquakes, we use NASA's data, tools, and expertise to build resilience in
          communities across the U.S. and around the world.
        </p>
      </Section>
      <Section>
        <h2 className="font-heading-md margin-y-4">Our Team</h2>
        <ul className="usa-list--unstyled grid-row grid-gap-2">
          {ABOUT_TEAM.map(({ name, role, image }) => (
            <li
              key={name}
              className="grid-col-12 tablet:grid-col-6 desktop:grid-col-4 margin-bottom-4"
            >
              <AppImage
                src={image}
                alt={name}
                width={712}
                height={572}
                sizes="(min-width: 64em) 33vw, (min-width: 40em) 50vw, 100vw"
                className="display-block width-full"
                // ponytail: USWDS has no aspect-ratio/object-fit utilities
                style={{ height: "auto", aspectRatio: "5 / 4", objectFit: "cover" }}
              />
              <h3 className="font-sans-sm text-semibold margin-top-1 margin-bottom-05">{name}</h3>
              <p className="font-sans-2xs line-height-sans-4 margin-0">{role}</p>
            </li>
          ))}
        </ul>
      </Section>
      <Section>
        <h2 className="font-heading-md margin-bottom-1">Connect with Us</h2>
        <p className="measure-6 line-height-sans-5 margin-top-0">
          Collaboration drives impact. We welcome partners across government, academia, and industry
          to connect with us, share perspectives, and help shape how Earth science is applied
          before, during, and after disasters. Together, we build a growing community committed to
          improving decision-making and outcomes for communities at risk.
        </p>
        <ul className="usa-list--unstyled">
          <li className="margin-bottom-1">
            <Link
              variant="arrow"
              color="secondary"
              href="https://lp.constantcontactpages.com/sl/ICIOyJI"
              rel="noopener noreferrer"
              target="_blank"
            >
              Get News & Updates with the NASA Disasters Community Newsletter
            </Link>
          </li>
          <li>
            <Link variant="arrow" color="secondary" href="mailto:disasters@nasa.gov">
              Contact Our Team
            </Link>
          </li>
        </ul>
      </Section>
    </div>
  );
}
