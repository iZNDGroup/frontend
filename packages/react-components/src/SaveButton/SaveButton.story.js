import React, { Fragment } from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import createStory from "../storybook/createStory";
import { SaveButton } from "../index";

storiesOf("Components/Buttons", module).add(
  "SaveButton",
  createStory(
    "`SaveButton` is a `Button` component with predefined `type`, `title` and  `leftIcon`. Could be used when e.g. saving a job.",
    [
      {
        title: "Simple examples",
        code: `
<SaveButton onClick={this._onClick} />
<SaveButton disabled onClick={this._onClick} />
`,
        render: () => (
          <Fragment>
            <SaveButton onClick={action("Button clicked")} />
            <SaveButton disabled onClick={action("Cannot click")} />
          </Fragment>
        )
      },
      {
        title: "Custom title example",
        code: `<SaveButton title="Item" onClick={this._onClick} />`,
        render: () => (
          <SaveButton title="Item" onClick={action("Button clicked")} />
        )
      }
    ],
    [SaveButton]
  )
);
