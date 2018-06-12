import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";
import Icon from "../Icon/Icon";
import styles from "./RadioButton.css";

export default class RadioButton extends React.Component {
  static propTypes = {
    /** Label displayed to the right of the radio button. */
    label: PropTypes.string.isRequired,
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
    const { checked, disabled, label } = this.props;
    const className = classNames({
      [styles.container]: true,
      [styles.disabled]: disabled
    });
    return (
      <div className={className} onClick={this._onClick}>
        {checked ? (
          <Icon name="dot-circle" color="#1A9DC6" size={16} />
        ) : (
          <Icon name="circle" color="#919191" size={16} type="light" />
        )}
        <div className={styles.label}>{label}</div>
      </div>
    );
  }
}
