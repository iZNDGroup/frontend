import React, { Fragment } from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import createStory from "../storybook/createStory";
import { AddButton } from "../index";

storiesOf("Components/Buttons", module).add(
  "AddButton",
  createStory(
    "`AddButton` is a `Button` component with predefined `type` and  `leftIcon`. Used for creating new items such as geofences, jobs etc.",
    [
      {
        title: "Simple examples",
        code: `
<AddButton
  title="Job"
  onClick={this._onClick}
/>
<AddButton
  title="Job"
  disabled
  onClick={this._onClick}
/>
`,
        render: () => (
          <Fragment>
            <AddButton title="Job" onClick={action("Button clicked")} />
            <AddButton title="Job" disabled onClick={action("Cannot click")} />
          </Fragment>
        )
      }
    ],
    [AddButton]
  )
);
