import React, { Fragment } from "react";

export default class Enum extends React.Component {
  render() {
    const { value } = this.props;
    return (
      <Fragment>enum ({value.map(({ value }) => value).join(", ")})</Fragment>
    );
  }
}
