import React, { Fragment } from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import createStory from "../storybook/createStory";
import { DeleteButton } from "../index";

storiesOf("Components/Buttons", module).add(
  "DeleteButton",
  createStory(
    "`DeleteButton` is a `Button` component with predefined `type`, `title` and  `leftIcon`. Could be used when e.g. deleting a job.",
    [
      {
        title: "Simple examples",
        code: `
<DeleteButton onClick={this._onClick} />
<DeleteButton disabled onClick={this._onClick} />
`,
        render: () => (
          <Fragment>
            <DeleteButton onClick={action("Button clicked")} />
            <DeleteButton disabled onClick={action("Cannot click")} />
          </Fragment>
        )
      },
      {
        title: "Custom title example",
        code: `<DeleteButton title="Item" onClick={this._onClick} />`,
        render: () => (
          <DeleteButton title="Item" onClick={action("Button clicked")} />
        )
      }
    ],
    [DeleteButton]
  )
);
