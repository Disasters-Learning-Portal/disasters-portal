import { Link } from "@teamimpact/veda-ui-blocks";
import { Fragment } from "react/jsx-runtime";
import { AppLinkStyled } from "@/app/components/AppLink";
import type { TrainingContent } from "@/app/site-config/types";

const IMG = "/img/training/portal-101";

export const TRAINING__PORTAL_101: TrainingContent = {
  id: "portal-101",
  contentType: "training",
  title: "PORTAL 101",
  subtitle: "A page-by-page guide to the NASA Disasters PORTAL",
  description:
    "Page-by-page user guidance for the NASA Disasters PORTAL, from the homepage and thematic need pages to the Custom Visualization Tool, plus example user pathways.",
  thumbnailImage: {
    src: "/img/training/portal-101.webp",
    alt: "False-color satellite imagery of a city and surrounding terrain, as displayed in the Custom Visualization Tool",
  },
  datePublished: "2026-10-02",
  themes: ["prepare", "respond", "recover", "resilience"],
  categories: [],
  mastheadImage: {
    src: "/img/training/portal-101.webp",
    alt: "False-color satellite imagery of a city and surrounding terrain, as displayed in the Custom Visualization Tool",
  },
  pdfLink: { label: "Download PDF", href: "/training/portal-101/print" },
  body: [
    {
      type: "text",
      heading: "1. Overview",
      paragraphs: [
        "Welcome to NASA Disasters PORTAL 101!",
        "The NASA Disasters Program advances the access to and application of Earth science information to build communities resilient to disasters and extreme events. Within the program, the Disasters PORTAL is specifically dedicated to improving the awareness, discoverability, and understanding of these data for disaster management communities.",
        "Driven by user feedback, needs, and experience, the NASA Disasters PORTAL aims to maximize partner impact and foster two-way collaboration across the disaster management cycle. The platform provides an intuitive, interactive environment for mapping, data visualizations, analysis, training resources, resilience science, and stories of impact.",
        <Fragment key="overview-contact">
          Here in Disasters PORTAL 101, you will find page-by-page user guidance, an FAQ section,
          and Example User Pathways to help you navigate the platform. If you cannot find the answer
          to your question within this module, please do not hesitate to reach out to us at{" "}
          <Link href="mailto:disasters@nasa.gov" isExternal>
            disasters@nasa.gov
          </Link>
          .
        </Fragment>,
      ],
    },

    {
      type: "text",
      heading: "2. Homepage",
      paragraphs: [
        <Fragment key="homepage-intro">
          The Disasters PORTAL homepage (
          <AppLinkStyled href="/">science.data.nasa.gov/disasters</AppLinkStyled>) serves as the
          main entry point to the platform. From here, users can navigate using the top navigation
          bar to explore thematic areas and events, read current news and stories, view dynamic data
          visualizations, access learning resources, and connect with the NASA Disasters Program.
        </Fragment>,
      ],
    },
    {
      type: "text",
      heading: "a. Top Level Navigation",
      headingLevel: "h3",
      paragraphs: [
        "Every page across the Disasters PORTAL features the same top navigation bar to ensure a consistent browsing experience.",
      ],
    },
    {
      type: "image",
      src: `${IMG}/top-navigation.webp`,
      alt: "The PORTAL top navigation bar: the NASA Disasters Program logo on the left, then About Us, Explore By Need, Explore Data, and Resources & Learning.",
      width: 2580,
      height: 122,
    },
    {
      type: "text",
      paragraphs: [
        <Fragment key="nav-logo">
          Clicking the NASA Disasters Program logo in the top left returns you to the Homepage,
          while the <strong>About Us</strong> link directs you to the <strong>About Us</strong>{" "}
          page.
        </Fragment>,
        <Fragment key="nav-explore-by-need">
          The <strong>Explore By Need</strong> dropdown features four options corresponding to four
          key disaster management phases: <strong>Prepare</strong>, <strong>Respond</strong>,{" "}
          <strong>Recover</strong>, and <strong>Build Resilience</strong>. Selecting any of these
          options directs you to its respective page.
        </Fragment>,
        <Fragment key="nav-explore-data">
          The <strong>Explore Data</strong> dropdown provides three options:{" "}
          <strong>Data Gallery</strong>, <strong>Data Visualization</strong>, and{" "}
          <strong>Data Processing</strong>. The <strong>Data Gallery</strong> option opens the{" "}
          <strong>Data Gallery</strong> page, and <strong>Data Visualization</strong> opens the{" "}
          <strong>Custom Visualization Tool</strong>. As of this soft launch, the{" "}
          <strong>Data Processing</strong> page is unavailable, though it is planned for a future
          release.
        </Fragment>,
        <Fragment key="nav-resources">
          The <strong>Resources & Learning</strong> dropdown contains two choices:{" "}
          <strong>Training</strong> and <strong>News, Events & Stories</strong>. Each option directs
          you to its corresponding page.
        </Fragment>,
      ],
    },
    {
      type: "text",
      heading: "b. Hero Section",
      headingLevel: "h3",
      paragraphs: [
        <Fragment key="hero">
          The hero section of the Homepage features cards at the bottom that invite users to
          navigate to the individual thematic need pages (<strong>Prepare</strong>,{" "}
          <strong>Respond</strong>, <strong>Recover</strong>, and <strong>Build Resilience</strong>
          ).
        </Fragment>,
      ],
    },
    {
      type: "text",
      heading: "c. News, Events & Stories",
      headingLevel: "h3",
      paragraphs: [
        <Fragment key="home-news">
          On the Homepage, the NASA Disasters Program highlights curated news, events and stories.
          Click on any of the cards to view the content. To see all entries, click “View All” in the
          top right corner to proceed to the News, Events and Stories page.
        </Fragment>,
      ],
    },
    {
      type: "text",
      heading: "d. Data Visualization",
      headingLevel: "h3",
      paragraphs: [
        <Fragment key="home-dataviz">
          The Homepage also features a dynamic data visualization curated by the NASA Disasters
          Program. While you can interact directly with the data on the page, the full suite of data
          visualization and analysis capabilities is available through the{" "}
          <strong>Custom Visualization Tool</strong>.
        </Fragment>,
      ],
    },
    {
      type: "text",
      heading: "e. Resources & Learning",
      headingLevel: "h3",
      paragraphs: [
        <Fragment key="home-resources">
          On the Homepage, the NASA Disasters Program highlights a curated selection of resources
          and learning opportunities. Click on any of the cards to view the content. To see all
          entries, click “View All” in the top right corner to proceed to the{" "}
          <strong>Training</strong> page.
        </Fragment>,
      ],
    },
    {
      type: "text",
      heading: "f. Let’s Connect",
      headingLevel: "h3",
      paragraphs: [
        <Fragment key="home-connect">
          From the Homepage, you can subscribe for updates or contact the NASA Disasters Program
          directly. Clicking “<strong>Subscribe for Updates</strong>” links you to the Disasters
          Program Newsletter sign-up page. Selecting “Contact our Team” will prompt you to email the
          program directly at{" "}
          <Link href="mailto:disasters@nasa.gov" isExternal>
            disasters@nasa.gov
          </Link>
          .
        </Fragment>,
      ],
    },
    {
      type: "text",
      heading: "g. Footer",
      headingLevel: "h3",
      paragraphs: [
        <Fragment key="footer">
          Each page of the Disasters PORTAL features a consistent Footer. Through it, users can
          navigate to different parts of the platform, access{" "}
          <Link href="https://www.nasa.gov" isExternal>
            nasa.gov
          </Link>
          , review relevant policy information, and view points of contact.
        </Fragment>,
      ],
    },

    {
      type: "text",
      heading: "3. About Us",
      paragraphs: [
        <Fragment key="about-us">
          The <strong>About Us</strong> page provides a high-level overview of the NASA Disasters
          Program’s mission and introduces leadership of the program. Users can also subscribe for
          updates or contact the program directly. Clicking “<strong>Subscribe for Updates</strong>”
          directs users to the Disasters Program Newsletter sign-up page. Selecting “
          <strong>Contact our Team</strong>” will prompt users to email the program directly at{" "}
          <Link href="mailto:disasters@nasa.gov" isExternal>
            disasters@nasa.gov
          </Link>
          .
        </Fragment>,
      ],
    },

    {
      type: "text",
      heading: "4. Explore By Need",
      paragraphs: [
        <Fragment key="ebn-intro">
          On the Disasters PORTAL, there are four thematic need pages: <strong>Prepare</strong>,{" "}
          <strong>Respond</strong>, <strong>Recover</strong>, and <strong>Build Resilience</strong>.
          The PORTAL has been designed so that navigation through these pages is the same experience
          regardless of which theme page you are on.
        </Fragment>,
        <Fragment key="ebn-stories">
          The <strong>Stories of Impact</strong> sections are at the top of each thematic need page.
          These stories serve as an entry point for exploring their respective thematic needs,
          allowing users to learn more about each topic through a related story and access relevant
          data, training, or other resources across the PORTAL. Click on any of the cards to view
          the content. To see all entries, users can click “View All” in the top right corner to
          proceed to the <strong>News, Events & Stories</strong> page.
        </Fragment>,
        <Fragment key="ebn-dataviz">
          Each thematic need page includes a featured data visualization selected by the NASA
          Disasters Program to highlight relevant information and datasets. Users can interact with
          the visualization directly on the page using available controls. For more advanced
          exploration, visualization, and analysis capabilities, users can access the{" "}
          <strong>Custom Visualization Tool</strong>.
        </Fragment>,
        <Fragment key="ebn-latest-events">
          For the <strong>Respond</strong> page, the <strong>Latest Events</strong> section
          highlights the most recent events supported by the NASA Disasters Response Coordination
          System (DRCS). Click on any of the cards to view that specific event’s page, which
          contains overview information about the event, a dynamic data visualization, associated{" "}
          <strong>Resources & Learning</strong>, and a <strong>Data Gallery</strong> where data
          related to the specific event can be found. To view all events, users can click “View All”
          in the top right corner to proceed to the <strong>News, Events & Stories</strong> page.
        </Fragment>,
        <Fragment key="ebn-data-stories">
          On each thematic need page, <strong>Data Stories</strong> are curated to be highlighted by
          the NASA Disasters Program. <strong>Data Stories</strong> use data-driven storytelling to
          place visualizations at the center of the experience, supported by narrative content that
          provides context and interpretation. Click on any of the cards to explore the full story.
          To see all entries, users can click “View All” in the top right corner to proceed to the{" "}
          <strong>News, Events & Stories</strong> page.
        </Fragment>,
        <Fragment key="ebn-resources">
          On each thematic need page, select <strong>Resources & Learning</strong> opportunities
          highlighted by the NASA Disasters Program. Click on any of the cards to view the content.
          To see all entries, users can click “View All” in the top right corner to proceed to the{" "}
          <strong>Training</strong> page.
        </Fragment>,
      ],
    },

    {
      type: "text",
      heading: "5. Data Gallery",
      paragraphs: [
        <Fragment key="data-gallery">
          The <strong>Data Gallery</strong> page allows users to explore Earth science data and
          information produced by the NASA Disasters Program to build disaster-resilient
          communities. Users can browse data that the NASA Disasters Program has curated, and
          utilize the search and filter functionality to find specific datasets of interest.
          Clicking on any of the cards will bring users to a dataset’s landing page, where you can
          view technical information on the dataset in addition to related content and tags.
        </Fragment>,
      ],
    },

    {
      type: "text",
      heading: "6. Custom Visualization Tool",
      paragraphs: [
        <Fragment key="cvt-intro">
          The <strong>Custom Visualization Tool</strong> is the primary data exploration and
          analysis platform for the PORTAL, serving as a browser-based extension for users to
          directly access and interact with data from the NASA Disasters Program. Built on NASA’s
          Visualization, Exploration, and Data Analysis (VEDA) science cyberinfrastructure, this
          open-source tool provides a low barrier of entry for exploring data products supplied by
          the program.
        </Fragment>,
        <Fragment key="cvt-default-view">
          The default view when navigating to the tool showcases various ways to explore data
          supported by the PORTAL, including <strong>Hazard</strong> and <strong>Event</strong>.
          Users can easily surface specific content via the <strong>clickable icons</strong> (see
          below image) located in the <strong>left navigation pane</strong>.
        </Fragment>,
      ],
    },
    {
      type: "image",
      src: `${IMG}/custom-visualization-tool.webp`,
      alt: "The Custom Visualization Tool default view. A red outline marks the Hazard and Event icons stacked in the far-left navigation rail, beside the Hazard filter and data overlay list and a map of the United States.",
      width: 1440,
      height: 824,
    },
    {
      type: "text",
      paragraphs: [
        <Fragment key="cvt-components-intro">
          The main components of the <strong>Custom Visualization Tool</strong> that remain
          consistent throughout the <strong>Hazard</strong> and <strong>Event</strong>-specific
          content are numbered in the image below.
        </Fragment>,
        <Fragment key="cvt-i">
          1. A <strong>Timeline</strong> component located on the bottom of the page. This component
          allows users to select a specific time of interest to explore available data products.
          (See <strong>Section 6.1</strong> for more information on the timeline component
          functionality and capabilities.)
        </Fragment>,
        <Fragment key="cvt-ii">
          2. Toggleable <strong>Data Overlays</strong> are located along the left navigation pane.
          This component allows users to search all available data layers, and filter them by tags
          specific to the Hazard and Event sub-navigations. Once selected, data availability
          populates on the tool timeline. Data with temporal information appears as a red bar across
          its available span. Data without temporal information appears as a grey bar. Users can
          also reorder data layers by dragging and dropping them.
        </Fragment>,
        "Items 3 to 6 are the map interaction widgets, grouped above the top right corner of the map.",
        <Fragment key="cvt-iii-search">
          3. <strong>Search Location</strong> allows users to query a specific geographic area of
          interest (AOI), and the map will automatically zoom into that region and denote it with a
          circular marker.
        </Fragment>,
        <Fragment key="cvt-iii-basemap">
          4. <strong>Basemap Style</strong> gives users the ability to alter the underlying basemap
          between streetview, satellite, light mode, dark mode, and an ‘outdoors’ style with terrain
          contours.
        </Fragment>,
        <Fragment key="cvt-iii-ruler">
          5. <strong>Ruler</strong> provides a dynamic measurement tool where users can click
          between two points on a map to return the measurement in both Imperial and Metric units.
        </Fragment>,
        <Fragment key="cvt-iii-zoom">
          6. <strong>Zoom In/Out Controls</strong> give users further control over their desired
          zoom extent of the map display. This functionality also exists by using your trackpad or
          the scroll wheel on your mouse.
        </Fragment>,
        <Fragment key="cvt-iv">
          7. A <strong>Share Map</strong> component that allows users to export their working
          session with all data overlays as a PNG or PDF. This tool also generates a unique URL to
          share the map view with dataset overlays and temporal/spatial selections saved.
        </Fragment>,
        <Fragment key="cvt-v">
          8. A dataset analysis component labeled <strong>Analyze Area</strong> that provides basic
          interactive data analysis functionality directly within the{" "}
          <strong>Custom Visualization Tool</strong>. (See <strong>Section 6.2</strong> for more
          information on the Analyze Area component functionality and capabilities.)
        </Fragment>,
      ],
    },
    {
      type: "image",
      src: `${IMG}/custom-visualization-tool-components.webp`,
      alt: "The Custom Visualization Tool with eight red outlines, each numbered to match the component list above: 1 around the timeline along the bottom, 2 around the data overlay list in the left pane, and 3 to 8 around the search, basemap, ruler, zoom, share and Analyze Area controls above the top right of the map.",
      width: 1440,
      height: 824,
      caption: "The numbered outlines correspond to the components described below.",
    },
    {
      type: "text",
      heading: "6.1. Timeline Component Functionality and Capabilities",
      headingLevel: "h3",
      paragraphs: [
        <Fragment key="timeline-body">
          The user-guided <strong>Timeline</strong> component provides advanced data visualization
          and analysis capabilities through several interactive features. Using the top-center
          controls, users can filter, scrub, and playback data. A dynamic calendar in the top-left
          corner of the tool enables precise date and time selection, while timeline indicators
          update automatically as different layers are toggled. Users can click directly on the
          timeline to select a specific timestamp, or zoom in or out by scrolling up or down while
          hovering over the tool. Additionally, interval buttons (Year, Month, Day, and Hour) in the
          top-right corner of the tool adjust the tick labels to the desired cadence for optimal
          clarity. If no data for a given layer is available at the selected time, the{" "}
          <strong>Data Overlays</strong> pane alerts the user with the message ‘No Data At This
          Time’. The timeline component also includes a <strong>Compare date</strong> feature
          located in the top left of the tool, allowing users to select and analyze two different
          timestamps of the same data product.
        </Fragment>,
      ],
    },
    {
      type: "image",
      src: `${IMG}/timeline-component.webp`,
      alt: "The timeline component: a date picker and Compare date control on the left, playback controls and a Day interval selector in the center, and zoom and display controls on the right, above six data layers whose available dates are charted as bars across a 2023 to 2026 axis, with a tooltip naming the next date for one layer.",
      width: 2582,
      height: 480,
    },
    {
      type: "text",
      heading: "6.2. Analyze Area Component",
      headingLevel: "h3",
      paragraphs: [
        <Fragment key="analyze-intro">
          The <strong>Analyze Area</strong> component includes several built-in features that
          provide dynamic data visualization and advanced analysis capabilities. Data that can be
          analyzed will be denoted in the <strong>Data Overlays</strong> pane with the message
          ‘Analyzable’. Once selected, its control panel appears in the top-right corner of the{" "}
          <strong>Custom Visualization Tool</strong>. This panel consists of four main features:{" "}
          <strong>Search</strong>, <strong>Inspect</strong>, <strong>Draw</strong>, and{" "}
          <strong>Upload</strong>.
        </Fragment>,
      ],
    },
    {
      type: "image",
      src: `${IMG}/analyze-area-panel.webp`,
      alt: "The Analyze areas panel open in the top right of the map, offering Search, Inspect, Draw and Upload tabs above a search field for a country or region, beside an OPERA Vegetation Disturbance Status layer drawn over the map.",
      width: 1440,
      height: 289,
    },
    {
      type: "text",
      paragraphs: [
        <Fragment key="analyze-features">
          The <strong>Search</strong> feature operates in the same way as{" "}
          <strong>Search Location</strong> in <strong>Section 6.0</strong>, but is currently
          restricted to state boundaries. Similarly, the <strong>Inspect</strong> feature allows
          users to select a state boundary directly from the map rather than querying it by name.
          The <strong>Draw</strong> and <strong>Upload</strong> features both generate polygon-bound
          AOIs for analysis. Specifically, the <strong>Draw</strong> feature enables users to sketch
          squares, circles, or custom shapes on the map, while the <strong>Upload</strong> feature
          allows them to import pre-existing AOI polygon shapefiles.
        </Fragment>,
        "Once a desired location has been selected, a pop-up prompts the user to analyze the area against all valid, active data overlays. After the analysis is complete, a results panel populates below the Analyze Area control panel. This section displays calculated statistics (mean, minimum, maximum, median, standard deviation, 2nd percentile, and 98th percentile) and a bar chart illustrating value distributions. For an example, see the Planet NDVI statistics from the 2025 Texas Flood event pictured below.",
      ],
    },
    {
      type: "image",
      src: `${IMG}/analyze-area-results.webp`,
      alt: "An Analysis results panel for GPM IMERG Precipitation beside an area of interest drawn over a precipitation layer for Typhoon Sinlaku, reporting a mean of 1.01 over 33% of 4,849 pixels marked valid, with a histogram and minimum, maximum, median, standard deviation and percentile values.",
      width: 1440,
      height: 823,
    },
    {
      type: "text",
      heading: "6.3. Hazard and Event Sub-Navigations",
      headingLevel: "h3",
      paragraphs: [
        <Fragment key="subnav">
          The <strong>Hazard</strong> sub-navigation is located in the left navigation pane and
          allows users to filter data overlays by hazard type. Available hazard options are
          displayed alongside their respective dataset counts, and toggling these options
          automatically filters the map to show only relevant data overlays. The{" "}
          <strong>Event</strong> sub-navigation filters data by specific disasters, including
          tropical cyclones, wildfires, severe weather, floods, and earthquakes. Users can search
          active and past events using parameters such as <strong>Hazard type, Year</strong>, or
          specific tagged event names (e.g., 2025 California Wildfires).
        </Fragment>,
      ],
    },
    {
      type: "image",
      src: `${IMG}/hazard-sub-navigation.webp`,
      alt: "The Hazard filter open in the left navigation pane, listing All Hazards, Earthquake, Fire, Flood, Landslide, SevereWx, Tropical Cyclone and Winter Weather with their dataset counts, over false-color satellite imagery.",
      width: 1440,
      height: 419,
    },

    {
      type: "text",
      heading: "7. Resources & Learning",
      paragraphs: [
        <Fragment key="resources-intro">
          The <strong>Resources & Learning</strong> section in the top navigation bar contains two
          dropdown options: <strong>Training</strong> and <strong>News, Events & Stories</strong>.
        </Fragment>,
        <Fragment key="resources-training">
          The <strong>Training</strong> page aims to empower disaster management communities through
          relevant, user-driven training resources. Users can easily search, filter, and click on
          any card to view a training.
        </Fragment>,
        // "new piece" is verbatim from the source document -- do not "correct" it here.
        <Fragment key="resources-news">
          The <strong>News, Events & Stories</strong> page allows users to discover the latest
          updates, opportunities, and stories highlighting the impact of the NASA Disasters Program.
          Users can search and filter the content, then click on any card to view the full story,
          new piece, or event.
        </Fragment>,
      ],
    },

    {
      type: "text",
      heading: "8. FAQ",
      paragraphs: [],
    },
    {
      type: "note",
      text: "FAQs coming soon! This section will grow as user questions are submitted and answered by the NASA Disasters Program.",
    },

    {
      type: "text",
      heading: "9. Example User Pathways",
      paragraphs: [],
    },
    {
      type: "list",
      heading: "1. Emergency Manager for Event Response",
      headingLevel: "h3",
      items: [
        "Access the Homepage by selecting the NASA Disasters Program logo in the top left corner of the page",
        <Fragment key="p1-respond">
          Navigate to the <strong>Respond page</strong> by clicking the{" "}
          <strong>Explore by Need</strong> dropdown in the top navigation bar
        </Fragment>,
        <Fragment key="p1-latest-events">
          Explore the <strong>Latest Events</strong> section and select the specific event or
          disaster of interest
        </Fragment>,
        <Fragment key="p1-related-data">
          Scroll through the <strong>Event page</strong> to the <strong>Related Data</strong>{" "}
          section and select the desired data product by clicking the “<strong>View Data</strong>”
          button
        </Fragment>,
        <Fragment key="p1-explore-data">
          Upon reaching the dataset landing page, click “<strong>Explore Data</strong>” on the left
          side of the page for further analysis
        </Fragment>,
        <Fragment key="p1-redirect">
          The platform will automatically redirect the user to the{" "}
          <strong>Custom Visualization Tool</strong>, pre-loading the selected dataset
        </Fragment>,
        <Fragment key="p1-event-filter">
          Click on the <strong>Event</strong> filter in the left navigation pane and select the
          specific event or disaster of interest to include all associated data layers
        </Fragment>,
        "Toggle and view different situational and data layers associated with the active event",
        <Fragment key="p1-view-in-gis">
          To integrate a specific layer into a local system, click “<strong>View in GIS</strong>” to
          access the corresponding GIS service link or web service
        </Fragment>,
      ],
    },
    {
      type: "list",
      heading: "2. Curious, Non-Technical Explorer",
      headingLevel: "h3",
      items: [
        "Access the Homepage by selecting the NASA Disasters Program logo in the top left corner of the page",
        <Fragment key="p2-explore-by-need">
          Navigate to a thematic need page of interest by clicking the{" "}
          <strong>Explore by Need</strong> dropdown in the top navigation bar
        </Fragment>,
        <Fragment key="p2-story-of-impact">
          Scroll through the page and explore the curated <strong>Story of Impact</strong> cards
          that link to detailed articles from the NASA Disasters Program
        </Fragment>,
        <Fragment key="p2-data-visualization">
          Review the <strong>Data Visualization</strong> section of the thematic need page and
          interact with the featured data product using the slider component
        </Fragment>,
        <Fragment key="p2-learn-more">
          To find additional resources, click the “<strong>Learn More</strong>” option on the{" "}
          <strong>Data Visualization</strong> section, which directs users to Earth science data and
          information on the <strong>Data Gallery</strong> page
        </Fragment>,
        <Fragment key="p2-connect">
          If you have remaining questions or want to stay updated, return to the Homepage and select{" "}
          “<strong>Connect with Us</strong>”
        </Fragment>,
      ],
    },
    {
      type: "list",
      heading: "3. Researcher/Data Scientist",
      headingLevel: "h3",
      items: [
        "Access the Homepage by selecting the NASA Disasters Program logo in the top left corner of the page",
        <Fragment key="p3-data-gallery">
          Navigate to the <strong>Data Gallery</strong> page by clicking the{" "}
          <strong>Explore Data</strong> dropdown in the top navigation bar
        </Fragment>,
        "Utilize the search functionality to find specific datasets of interest",
        <Fragment key="p3-view-data">
          Click the “<strong>View Data</strong>” button to review technical information on the
          dataset in addition to related content and tags
        </Fragment>,
        <Fragment key="p3-explore-data">
          Upon reaching the dataset landing page, click “<strong>Explore Data</strong>” on the left
          side of the page for further analysis
        </Fragment>,
        <Fragment key="p3-redirect">
          The platform will automatically redirect the user to the{" "}
          <strong>Custom Visualization Tool</strong>, pre-loading the selected dataset
        </Fragment>,
        <Fragment key="p3-view-in-gis">
          To integrate a specific layer into a local system, click “<strong>View in GIS</strong>” to
          access the corresponding GIS service link or web service
        </Fragment>,
      ],
    },
  ],
};
