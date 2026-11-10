<!-- Generated from app/site-config/types.ts. Run `pnpm docs:specs` instead of editing. -->

## `EventContent`

| Field | Label | Required | Type | Length | Notes |
|---|---|---|---|---|---|
| `id` | URL slug | Yes | string |  | Lowercase words separated by hyphens; usually a shortened title. |
| `title` | Title | Yes | string | max 100, aim for 75 | Shown on the masthead and on every card, so it must fit the narrowest card or expect it to be truncated. |
| `subtitle` |  | No | string |  | **Deprecated.** |
| `thumbnailImage.src` |  | Yes | string |  | Used in Cards. Follow the guidelines in [images.md](images.md) |
| `thumbnailImage.alt` |  | Yes | string |  |  |
| `themes` | NEED | Yes | One or more of the allowed values |  | Values: `prepare`, `respond`, `recover`, `resilience` |
| `categories` | HAZARD | Yes | One or more of the allowed values |  | Values: `cyclone`, `earthquake`, `fire`, `flood`, `heat`, `hurricane`, `landslide`, `severe weather`, `tropical cyclone`, `tsunami`, `typhoon`, `volcano`, `winter weather` |
| `description` |  | No | string | max 200, aim for 150 | Shown on cards, except for Event pages, where its shown on the masthead. |
| `dateUpdated` | Updated | Yes | Date (YYYY-MM-DD) |  | Last time this content changed. (Update on every edit.) Shown only on the masthead. |
| `contentType` |  | Auto | "event" |  |  |
| `mastheadImage.src` |  | Yes | string |  | Follow the guidelines in [images.md](images.md) |
| `mastheadImage.alt` |  | Yes | string |  |  |
| `isLatest` |  | No | boolean |  | Adds the `active` tag to the event's card, except in the gallery. |
| `startDate` | START DATE | Yes | Date (YYYY-MM-DD) |  | Activation Date: when NASA Disasters began responding to the Disaster. |
| `endActivationDate` | END DATE | No | Date (YYYY-MM-DD) |  | End Activation Date: when NASA Disasters stops responding to the Disaster. |
| `region` | REGION | Yes | string |  | Locations impacted. Comma-delimited list. Shown in the sidebar. |
| `linkDHSFEMA` | What DHS and FEMA are doing | No | Link (label and href) |  | Shown in the event overview. |
| `linkUSGovernment` | What the U.S. government is doing | No | Link (label and href) |  | Shown in the event overview. |
| `egisDataGalleryUrl` |  | No | string |  | Provided by the Disasters team as part of an Event Activation. Example [EGIS Data Gallery Page URL](https://gis.earthdata.nasa.gov/portal/home/group.html?id=15f22eae89184fb38eaa2118b957bfe9) |
| `body` |  | No | Content blocks (see blocks table) |  |  |
| `relatedContent` |  | No | string[] |  | IDs of related content. Not shown on event pages yet. |
