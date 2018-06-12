import React, { Fragment } from "react";
import PropertyType from "../PropertyType";

export default class ArrayOf extends React.Component {
  render() {
    const { value } = this.props;
    return (
      <Fragment>
        [<PropertyType {...value} />]
      </Fragment>
    );
  }
}
