"use client";

import { Accordion, Checkbox, Drawer, Link } from "@teamimpact/veda-ui-blocks";
import type { UseFilterDrawerResult } from "./hooks/useFilterDrawer";

type FilterDrawerProps = {
  drawer: UseFilterDrawerResult;
};

/**
 * The Sort & Filter drawer: an accordion of facet checkboxes with an
 * Apply/Clear footer. Pure rendering over useFilterDrawer's sections;
 * checkbox toggles edit its draft and nothing commits until Apply.
 */
export function FilterDrawer({ drawer }: FilterDrawerProps) {
  return (
    <Drawer
      title="Sort & Filter"
      isOpen={drawer.isOpen}
      onClose={drawer.close}
      footer={
        <div className="display-flex">
          <Link
            as="button"
            variant="button"
            className="usa-button display-flex flex-justify-center flex-1 margin-right-2"
            onClick={drawer.apply}
          >
            Apply Filters
          </Link>
          <Link as="button" variant="button-outline" className="usa-button" onClick={drawer.clear}>
            Clear
          </Link>
        </div>
      }
    >
      <Accordion
        titleAs="h3"
        data-allow-multiple
        items={drawer.sections.map((section) => ({
          id: section.id,
          title: section.title,
          expanded: true,
          content: section.options.map((option) => (
            <Checkbox
              key={option.value}
              name={section.id}
              label={option.label}
              value={option.value}
              inputProps={{ checked: option.selected, onChange: option.toggle }}
            />
          )),
        }))}
      />
    </Drawer>
  );
}
