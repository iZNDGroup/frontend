import PropTypes from "prop-types";
import React from "react";
import Field from "../Field/Field";
import CustomPropTypes from "../customPropTypes";
import RadioButton from "../RadioGroup/RadioButton";
import RadioIconButton from "../RadioGroup/RadioIconButton";
import RadioGroup from "../RadioGroup/RadioGroup";

export default class RadioGroupField extends React.Component {
  static propTypes = {
    /** Needs to match one of the keys in the object passed to `Form` component's `initialValues` property. */
    name: PropTypes.string.isRequired,
    children: CustomPropTypes.childrenOfType(
      CustomPropTypes.componentOfType([RadioButton, RadioIconButton])
    ).isRequired
  };

  static defaultProps = {};

  render() {
    const { name, children } = this.props;
    return (
      <Field name={name}>
        {props => (
          <RadioGroup selectedValue={props.value} onChange={props.setValue}>
            {children}
          </RadioGroup>
        )}
      </Field>
    );
  }
}
