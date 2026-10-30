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

Let's use this issue to coordinate work across teams, track handoffs, and monitor progress as we work to integrate a new Disasters Event into [the Portal], backend Data Services ([STAC]), and MMGIS [Visualization Tool]. For expected sequence of updates, see the [Event Activation Workflow].

## Event Details

\*\* Not yet in the schema

### **Minimum Required** (by the code or the program)

| Item                    | `EventContent` field       | formatting                           | value   |
| ----------------------- | -------------------------- | ------------------------------------ | ------- |
| Name                    | `title`                    | ---                                  |         |
| Description             | `description`              | ---                                  |         |
| Activation Date         | `startDate`                | YYYY-MM-DD                           |         |
| Overview summary        | Overview `paragraphs`      | ---                                  |         |
| Locations impacted      | `region`                   | comma-delimited                      |         |
| EGIS Gallery Page URL   | `egisDataGalleryUrl` \*\*  | ---                                  |         |
| Theme                   | `themes`                   | ---                                  | respond |
| Hazards                 | `categories`               | comma-delimited, see Hazards options |         |
| Data                    | Event Data Gallery `cards` | comma-delimited                      |         |
| Thumbnail Image URL     | `thumbnailImage.src`       | ---                                  |         |
| Thumbnail Image caption | `thumbnailImage.alt`       | ---                                  |         |
| Masthead Image URL      | `mastheadImage.src`        | ---                                  |         |
| Masthead Image caption  | `mastheadImage.alt`        | ---                                  |         |

### **Optional** (could be updated at a later date)

| Item                    | `EventContent` field     | formatting | value      |
| ----------------------- | ------------------------ | ---------- | ---------- |
| Published Date          | `datePublished`          | YYYY-MM-DD |            |
| End (Deactivation) Date | `endActivationDate` \*\* | YYYY-MM-DD |            |
| Government link label   | `linkUSGovernment.label` | ---        | Learn more |
| Government link         | `linkUSGovernment.href`  | ---        |            |

### **Reference**

- Example [EGIS Data Gallery Page URL](https://gis.earthdata.nasa.gov/portal/home/group.html?id=15f22eae89184fb38eaa2118b957bfe9)
- Possible [`DATA` layers](https://github.com/Disasters-Learning-Portal/disasters-portal/blob/main/app/site-config/data/index.ts)
- Possible Hazard options are [`CONTENT_CATEGORIES`](https://github.com/Disasters-Learning-Portal/disasters-portal/blob/main/app/site-config/types.ts)
- Image URLs should be relative, like `/img/event/template-hero.webp`

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
[Event Activation Workflow]: https://github.com/Disasters-Learning-Portal/disasters-portal/blob/develop/docs/event-activation-workflow.md
