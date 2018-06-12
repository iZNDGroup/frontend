import React, { Fragment } from "react";
import { storiesOf } from "@storybook/react";
import createStory from "../storybook/createStory";
import { Icon } from "../index";

storiesOf("Components/Icon", module).add(
  "Icon",
  createStory(
    "Component for displaying an icon. The icons come from [Font Awesome](https://fontawesome.com/icons?d=gallery). ",
    [
      {
        title: "Simple example",
        code: `<Icon name="star" color="blue" tooltip="This is an icon" />`,
        render: () => (
          <Icon name="star" color="blue" tooltip="This is an icon" />
        )
      },
      {
        title: "Size examples",
        code: `
<Icon name="star" color="red" size={16} />
<Icon name="star" color="red" size={24} />
<Icon name="star" color="red" size={36} />
`,
        render: () => (
          <Fragment>
            <Icon name="star" color="red" size={16} />
            <Icon name="star" color="red" size={24} />
            <Icon name="star" color="red" size={36} />
          </Fragment>
        )
      },
      {
        title: "Type examples",
        code: `
<Icon name="star" color="orange" type="solid" />
<Icon name="star" color="orange" type="regular" />
<Icon name="star" color="orange" type="light" />
`,
        render: () => (
          <Fragment>
            <Icon name="star" color="orange" type="solid" />
            <Icon name="star" color="orange" type="regular" />
            <Icon name="star" color="orange" type="light" />
          </Fragment>
        )
      }
    ],
    [Icon]
  )
);
