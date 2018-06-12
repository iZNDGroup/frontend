import React, { Fragment } from "react";
import PropertyType from "../PropertyType";

export default class ObjectOf extends React.Component {
  render() {
    const { value } = this.props;
    return (
      <Fragment>
        {"{[key]: "}
        <PropertyType {...value} />
        {"}"}
      </Fragment>
    );
  }
}
