import React from "react";
import { storiesOf } from "@storybook/react";
import createStory from "../storybook/createStory";
import { ErrorBoundary } from "../index";

storiesOf("Components/ErrorBoundary", module).add(
  "ErrorBoundary",
  createStory(
    "ErrorBoundary will display a friendly error message instead of crashing if a component inside throws an error.",
    [
      {
        title: "Simple examples",
        code: `
<ErrorBoundary>
  <MyComponent />
</ErrorBoundary>
`,
        render: () => (
          <ErrorBoundary>
            <ThrowError />
          </ErrorBoundary>
        )
      }
    ],
    [ErrorBoundary]
  )
);

const ThrowError = () => {
  throw new Error("An error occurred");
};
