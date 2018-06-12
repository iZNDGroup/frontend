import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";
import CustomPropTypes from "../customPropTypes";
import RadioButton from "./RadioButton";
import RadioIconButton from "./RadioIconButton";
import styles from "./RadioGroup.css";

export default class RadioGroup extends React.Component {
  static propTypes = {
    children: CustomPropTypes.childrenOfType(
      CustomPropTypes.componentOfType([RadioButton, RadioIconButton])
    ).isRequired,
    selectedValue: PropTypes.any.isRequired,
    /** Called whenever a RadioButton option is selected. Argument represents RadioButton group's new value. */
    onChange: PropTypes.func.isRequired
  };

  static defaultProps = {};

  render() {
    const { children } = this.props;
    const className = classNames({
      [styles.container]: true
    });
    return (
      <div className={className}>
        {React.Children.map(children, child =>
          React.cloneElement(child, {
            checked: this.props.selectedValue === child.props.value,
            onChange: () => {
              this.props.onChange(child.props.value);
            }
          })
        )}
      </div>
    );
  }
}
