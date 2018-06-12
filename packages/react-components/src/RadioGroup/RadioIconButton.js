import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";
import IconButton from "../IconButton/IconButton";
import styles from "./RadioIconButton.css";

export default class RadioIconButton extends React.Component {
  static propTypes = {
    /** The name of the icon */
    icon: PropTypes.string.isRequired,
    /** Descriptive name of the option */
    label: PropTypes.string,
    value: PropTypes.any.isRequired,
    disabled: PropTypes.bool,
    /** Called when radio option is clicked. Should not be used when the component is used inside RadioGroup. */
    onChange: PropTypes.func,
    /** Whether or not radio option should be checked. Should not be used when the component is used inside RadioGroup. */
    checked: PropTypes.bool
  };

  static defaultProps = {
    disabled: false
  };

  _onClick = ev => {
    const { checked, disabled, onChange } = this.props;
    if (!disabled) {
      onChange(!checked, ev);
    }
  };

  render() {
    const { checked, icon, disabled, label } = this.props;
    const className = classNames({
      [styles.container]: true,
      [styles.disabled]: disabled,
      [styles.checked]: checked
    });
    return (
      <div className={className} onClick={this._onClick}>
        <IconButton
          icon={icon}
          colorType="medium"
          tooltip={label}
          size={24}
          onClick={this._onClick}
          disabled={disabled}
        />
      </div>
    );
  }
}
