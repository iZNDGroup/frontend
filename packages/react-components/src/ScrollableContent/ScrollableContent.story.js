import React from "react";
import { storiesOf } from "@storybook/react";
import createStory from "../storybook/createStory";
import { ScrollableContent } from "../index";

const content = (
  <div>
    1...<br />2...<br />3...<br />4...<br />5...<br />
    6...<br />7...<br />8...<br />9...<br />10...<br />
    11...<br />12...<br />13...<br />14...<br />15...<br />
    16...<br />17...<br />18...<br />19...<br />20...<br />
  </div>
);

storiesOf("Components/ScrollableContent", module).add(
  "ScrollableContent",
  createStory(
    "`ScrollableContent` is used when there is a need of a fixed header or footer (or both).",
    [
      {
        title: "Simple example",
        code: `
<ScrollableContent
  header={<div>Header</div>}
  footer={<div>Footer</div>}
  content={<div>1... 2... 3...</div>}
  height={200}
/>
`,
        render: () => (
          <ScrollableContent
            header={<div>Header</div>}
            footer={<div>Footer</div>}
            content={content}
            height={200}
          />
        )
      },
      {
        title: "Scrolled example",
        text: "This example has scrolled 50px initially.",
        code: `
<ScrollableContent
  header={<div>Header</div>}
  footer={<div>Footer</div>}
  content={<div>1... 2... 3...</div>}
  height={200}
  scrollPosition={50}
/>
`,
        render: () => (
          <ScrollableContent
            header={<div>Header</div>}
            footer={<div>Footer</div>}
            content={content}
            height={200}
            scrollPosition={50}
          />
        )
      },
      {
        title: "Fullscreen example",
        text:
          "Enabling the `fullscreen` property the component will stretch to its parent full size. Only used when necessary due to outer styling. An example is when `ScrollableContent` is used in a window.",
        code: `
<ScrollableContent
  header={<div>Header</div>}
  footer={<div>Footer</div>}
  content={<div>1... 2... 3...</div>}
  fullscreen
/>
  `,
        render: () => (
          <div
            style={{
              height: 200,
              width: 200,
              border: "1px solid red",
              position: "relative"
            }}
          >
            <ScrollableContent
              header={<div>Header</div>}
              footer={<div>Footer</div>}
              content={content}
              fullscreen
            />
          </div>
        )
      }
    ],
    [ScrollableContent]
  )
);
