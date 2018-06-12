import React, { Fragment } from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import createStory from "../storybook/createStory";
import { IconButton } from "../index";

storiesOf("Components/Buttons", module).add(
  "IconButton",
  createStory(
    "`IconButton` could be used instead of `Button` in for example a table where there is limited spacing.",
    [
      {
        title: "Simple examples",
        code: `
<IconButton icon="star" onClick={this._onClick} />
<IconButton icon="star" disabled onClick={this._onClick} />
`,
        render: () => (
          <Fragment>
            <IconButton icon="star" onClick={action("Icon clicked")} />
            <IconButton icon="star" disabled onClick={action("Cannot click")} />
          </Fragment>
        )
      },
      {
        title: "ColorType examples",
        code: `
<IconButton
  icon="star"
  colorType="dark"
  tooltip="dark"
  onClick={this._onClick}
/>
<IconButton
  icon="star"
  colorType="medium"
  tooltip="medium"
  onClick={this._onClick}
/>
<IconButton
  icon="star"
  colorType="light"
  tooltip="light"
  onClick={this._onClick}
/>
`,
        render: () => (
          <Fragment>
            <IconButton
              icon="star"
              colorType="dark"
              tooltip="dark"
              onClick={action("Icon clicked")}
            />
            <IconButton
              icon="star"
              colorType="medium"
              tooltip="medium"
              onClick={action("Icon clicked")}
            />
            <IconButton
              icon="star"
              colorType="light"
              tooltip="light"
              onClick={action("Icon clicked")}
            />
          </Fragment>
        )
      },
      {
        title: "Size examples",
        code: `
<IconButton
  icon="star"
  tooltip="size = 8"
  size={8}
  onClick={this._onClick}
/>
<IconButton
  icon="star"
  tooltip="size = 16 (default)"
  size={16}
  onClick={this._onClick}
/>
<IconButton
  icon="star"
  tooltip="size = 32"
  size={32}
  onClick={this._onClick}
/>
        `,
        render: () => (
          <Fragment>
            <IconButton
              icon="star"
              tooltip="size = 8"
              size={8}
              onClick={action("Icon clicked")}
            />
            <IconButton
              icon="star"
              tooltip="size = 16 (default)"
              size={16}
              onClick={action("Icon clicked")}
            />
            <IconButton
              icon="star"
              tooltip="size = 32"
              size={32}
              onClick={action("Icon clicked")}
            />
          </Fragment>
        )
      }
    ],
    [IconButton]
  )
);
