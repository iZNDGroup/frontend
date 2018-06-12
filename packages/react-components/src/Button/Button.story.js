import React, { Fragment } from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import createStory from "../storybook/createStory";
import { Button } from "../index";

storiesOf("Components/Buttons", module).add(
  "Button",
  createStory(
    "Buttons are used to manage user actions.",
    [
      {
        title: "Simple examples",
        code: `
<Button
  title="Click me"
  onClick={this._onClick}
/>
<Button
  title="Disabled button"
  disabled
  onClick={this._onClick}
/>
`,
        render: () => (
          <Fragment>
            <Button title="Click me" onClick={action("Button clicked")} />
            <Button
              title="Disabled button"
              disabled
              onClick={action("Cannot click")}
            />
          </Fragment>
        )
      },
      {
        title: "Type examples",
        code: `
<Button
  title="Primary"
  type="primary"
  onClick={this._onClick}
/>
<Button
  title="Secondary"
  type="secondary"
  onClick={this._onClick}
/>
<Button
  title="Success"
  type="success"
  onClick={this._onClick}
/>
<Button
  title="Danger"
  type="danger"
  onClick={this._onClick}
/>
`,
        render: () => (
          <Fragment>
            <Button
              title="Primary"
              type="primary"
              onClick={action("Button clicked")}
            />
            <Button
              title="Secondary"
              type="secondary"
              onClick={action("Button clicked")}
            />
            <Button
              title="Success"
              type="success"
              onClick={action("Button clicked")}
            />
            <Button
              title="Danger"
              type="danger"
              onClick={action("Button clicked")}
            />
          </Fragment>
        )
      },
      {
        title: "Icon examples",
        code: `
<Button
  title="Favorite"
  leftIcon="star"
  onClick={this._onClick}
/>
<Button
  title="Expand"
  rightIcon="caret-down"
  onClick={this._onClick}
/>
<Button
  title="Navigate"
  leftIcon="chevron-left"
  rightIcon="chevron-right"
  onClick={this._onClick}
/>
`,
        render: () => (
          <Fragment>
            <Button
              title="Favorite"
              leftIcon="star"
              onClick={action("Button clicked")}
            />
            <Button
              title="Expand"
              rightIcon="caret-down"
              onClick={action("Button clicked")}
            />
            <Button
              title="Navigate"
              leftIcon="chevron-left"
              rightIcon="chevron-right"
              onClick={action("Button clicked")}
            />
          </Fragment>
        )
      },
      {
        title: "Action examples",
        code: `
<Button
  title="Back"
  leftIcon="caret-left"
  leftIconBorder
  onClick={this._onClick}
  onLeftIconClick={this._onLeftIconClick}
/>
<Button
  title="Back"
  leftIcon="caret-left"
  onClick={this._onClick}
  onLeftIconClick={this._onLeftIconClick}
/>
<Button
  title="Forward"
  rightIcon="caret-right"
  rightIconBorder
  onClick={this._onClick}
  onRightIconClick={this._onRightIconClick}
/>
<Button
  title="Forward"
  rightIcon="caret-right"
  onClick={this._onClick}
  onRightIconClick={this._onRightIconClick}
/>
`,
        render: () => (
          <Fragment>
            <Button
              title="Back"
              leftIcon="caret-left"
              leftIconBorder
              onClick={action("Button clicked")}
              onLeftIconClick={action("Left icon clicked")}
            />
            <Button
              title="Back"
              leftIcon="caret-left"
              onClick={action("Button clicked")}
              onLeftIconClick={action("Left icon clicked")}
            />
            <Button
              title="Forward"
              rightIcon="caret-right"
              rightIconBorder
              onClick={action("Button clicked")}
              onRightIconClick={action("Right icon clicked")}
            />
            <Button
              title="Forward"
              rightIcon="caret-right"
              onClick={action("Button clicked")}
              onRightIconClick={action("Right icon clicked")}
            />
          </Fragment>
        )
      }
    ],
    [Button]
  )
);
