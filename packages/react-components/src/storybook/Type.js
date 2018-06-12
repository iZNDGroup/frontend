import React, { Fragment } from "react";
import Property from "./Property";

export default class Type extends React.Component {
  render() {
    const { displayName, description, props } = this.props;
    return (
      <Fragment>
        <h2>{displayName} properties</h2>
        {description && <p>{description}</p>}
        {props && (
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Required</th>
                <th>Default</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(props).map((propName, i) => (
                <Property
                  key={`property-${i}`}
                  name={propName}
                  {...props[propName]}
                />
              ))}
            </tbody>
          </table>
        )}
        {!props && <p>No properties.</p>}
      </Fragment>
    );
  }
}
