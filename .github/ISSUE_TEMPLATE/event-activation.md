---
name: Event Activation
about: Work to follow a natural disaster Event
title: "DISASTER EVENT ACTIVATION: [Event Name]"
labels: Activation Event
type: task
assignees: ""
---

## Purpose

To track the work required to integrate a NASA Disasters Team **Activation Event** into [the Portal], backend Data Services ([STAC]), and MMGIS [Visualization Tool].

Use this issue to coordinate work across teams, track handoffs, and monitor progress through **Activation**.

## Event Details

- Event name:
- Event type(s):
  - Options: cyclone, earthquake, fire, flood, heat, hurricane, landslide, severe weather, tropical cyclone, tsunami, typhoon, volcano, winter weather
- Event location or geometry (if provided):
- Event start date (if provided):
- Expected data series (draft):
- Contact:
- Any other relevant notes:

## Tasks

<!-- Please consider this task list a work-in-progress as we work to determine our order of operations. -->

- [ ] [Portal] Create a new `Event` Page with initial event information.
- [ ] [GIS Team] Acquire the relevant data and notify the Data Services team when ready.
- [ ] [Data Services] Ingest the data and notify the Portal & Plugins team when available.
- [ ] [Portal] Update the `Event` Page to include the associated dataset(s).
- [ ] [Leads] Verify that the event and associated data are accessible and functioning as expected.

## Acceptance Criteria

- [ ] The Event page reflects the available event information and associated datasets.
- [ ] Relevant data is available as expected through the Portal and MMGIS Visualization tool.
- [ ] Outstanding work, limitations, or follow-up items are documented.
