import React, { Fragment } from "react";
import PropertyType from "../PropertyType";

export default class Union extends React.Component {
  render() {
    const { value } = this.props;
    return (
      <Fragment>
        {value.map((type, i) => [
          <PropertyType key={`propertyType-${i}`} {...type} />,
          i < value.length - 1 && (
            <span key={`propertyType-separator-${i}`}> | </span>
          )
        ])}
      </Fragment>
    );
  }
}
