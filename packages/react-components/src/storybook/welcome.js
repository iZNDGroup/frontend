import { storiesOf } from "@storybook/react";
import createStory from "./createStory";

storiesOf("# Welcome", module).add(
  "Welcome",
  createStory(`
TODO

## Usage

To use the components import @gpsgate/react-components:

~~~
import { Button, Card } from "@gpsgate/react-components";
~~~
`)
);
