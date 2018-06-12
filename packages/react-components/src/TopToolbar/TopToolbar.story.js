import React, { Fragment } from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import createStory from "../storybook/createStory";
import { AddButton, TopToolbar } from "../index";

storiesOf("Components/Toolbars", module).add(
  "TopToolbar",
  createStory(
    "`TopToolbar` is used to display user actions. An example of usage is to display buttons for creating items to the right and a search input for searching amoing the items to the left.",
    [
      {
        title: "Simple example",
        code: `
<TopToolbar
  leftContent={<div>Left content</div>}
  centerContent={<div>Center content</div>}
  rightContent={<div>Right content</div>}
/>
`,
        render: () => (
          <TopToolbar
            leftContent={<div>Left content</div>}
            centerContent={<div>Center content</div>}
            rightContent={<div>Right content</div>}
          />
        )
      },
      {
        title: "Toolbar with buttons example",
        code: `
<TopToolbar
  rightContent={
    <Fragment>
      <AddButton title="Route" onClick={this._onAddRoute} />
      <AddButton title="Job" onClick={this._onAddJob} />
    </Fragment>
  }
/>
`,
        render: () => (
          <TopToolbar
            rightContent={
              <Fragment>
                <AddButton title="Route" onClick={action("Route clicked")} />
                <AddButton title="Job" onClick={action("Job clicked")} />
              </Fragment>
            }
          />
        )
      }
    ],
    [TopToolbar]
  )
);
