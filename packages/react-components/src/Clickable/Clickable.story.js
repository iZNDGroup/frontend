import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import createStory from "../storybook/createStory";
import { Clickable } from "../index";

storiesOf("Components/Clickable", module).add(
  "Clickable",
  createStory(
    "Component that detects whether click event was inside or outside component.",
    [
      {
        title: "Simple example",
        code: `
<Clickable
  onClick={this._onClick}
  onOutsideClick={this._outsideClick}
>
  <div style={{ background: "red", color: "white", padding: 20 }}>
    Try click inside and outside this box.
  </div>
</Clickable>
`,
        render: () => (
          <Clickable
            onClick={action("Clicked inside")}
            onOutsideClick={action("Clicked outside")}
          >
            <div style={{ background: "red", color: "white", padding: 20 }}>
              Try click inside and outside this box.
            </div>
          </Clickable>
        )
      }
    ],
    [Clickable]
  )
);
