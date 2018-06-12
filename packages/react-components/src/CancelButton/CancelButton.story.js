import React, { Fragment } from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import createStory from "../storybook/createStory";
import { CancelButton } from "../index";

storiesOf("Components/Buttons", module).add(
  "CancelButton",
  createStory(
    "`CancelButton` is a `Button` component with predefined `type`, `title` and  `leftIcon`. Could be used when e.g. closing windows.",
    [
      {
        title: "Simple examples",
        code: `
<CancelButton onClick={this._onClick} />
<CancelButton disabled onClick={this._onClick} />
`,
        render: () => (
          <Fragment>
            <CancelButton onClick={action("Button clicked")} />
            <CancelButton disabled onClick={action("Cannot click")} />
          </Fragment>
        )
      },
      {
        title: "Custom title example",
        code: `<CancelButton title="Close" onClick={this._onClick} />`,
        render: () => (
          <CancelButton title="Close" onClick={action("Button clicked")} />
        )
      }
    ],
    [CancelButton]
  )
);
