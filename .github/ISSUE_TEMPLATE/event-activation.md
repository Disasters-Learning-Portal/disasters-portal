---
name: Event Activation
about: Work to follow a natural disaster Event
title: "DISASTER EVENT ACTIVATION: [Event Name]"
labels: Activation Event
type: task
assignees: ""
---

## Purpose

To trigger a new NASA Disasters Team **Event Activation**.

Let's use this issue to coordinate work across teams, track handoffs, and monitor progress as we work to integrate a new Disasters Event into [the Portal], backend Data Services ([STAC]), and MMGIS [Visualization Tool]. For expected sequence of updates, see the [Event Activation Workflow](../../docs/event-activation-workflow.md).

## Event Details

- Event name (Title):
- Event description (Sub-title):
- Event Activation Start Date:
- Event Activation End Date (to be used to close this issue):
- Government link:
- Overview summary:
- Static Image:
- Static Image caption:
- EGIS Data Gallery Page URL: <!-- Example: https://gis.earthdata.nasa.gov/portal/home/group.html?sortField=added&sortOrder=desc&id=15f22eae89184fb38eaa2118b957bfe9#content -->
- Data Gallery layers needed (list):
- Hazards (list): <!-- Options: cyclone, earthquake, fire, flood, heat, hurricane, landslide, severe weather, tropical cyclone, tsunami, typhoon, volcano, winter weather -->
- Locations impacted (list):

## Tasks per Team

- [ ] [Portal] New `Event` Page with initial event information
- [ ] [Data Services] Ingest the data and notify Plugins team when available.
- [ ] [Plugins] Update the Visualization Tool as needed.
- [ ] [Leads] Review that the event and associated data are accessible and functioning as expected.

## Acceptance Criteria

- [ ] The Event page reflects the available event information and associated datasets.
- [ ] Relevant data is available as expected through the Portal and MMGIS Visualization tool.
- [ ] Outstanding work, limitations, or follow-up items are documented.

[the Portal]: https://science.data.nasa.gov/disasters
[STAC]: https://disasters.openveda.cloud/api/stac/
[Visualization Tool]: https://science.data.nasa.gov/disasters/data-visualization
