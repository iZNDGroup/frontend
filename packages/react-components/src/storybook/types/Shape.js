import React, { Fragment } from "react";
import { HighlightButton } from "@storybook/components";
import PropertyType from "../PropertyType";

export default class Shape extends React.Component {
  state = { showShape: false };

  toggleShow = () => {
    this.setState(prevState => ({ showShape: !prevState.showShape }));
  };

  render() {
    const { value } = this.props;
    const { showShape } = this.state;
    return (
      <span
        style={{
          fontFamily:
            '"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace'
        }}
      >
        {"{"}
        <HighlightButton onClick={this.toggleShow}>{"..."}</HighlightButton>
        {showShape && (
          <pre
            style={{ fontSize: "inherit", padding: "0 16px", marginBottom: 0 }}
          >
            <code>
              {Object.keys(value).map(key => (
                <Fragment key={key}>
                  {key}
                  {!value[key].required && "?"}:{" "}
                  <PropertyType {...value[key]} />,{"\n"}
                </Fragment>
              ))}
            </code>
          </pre>
        )}
        {"}"}
      </span>
    );
  }
}
