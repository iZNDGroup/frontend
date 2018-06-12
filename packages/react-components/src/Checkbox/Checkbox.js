import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";
import Icon from "../Icon/Icon";
import styles from "./Checkbox.css";

export default class Checkbox extends React.Component {
  static propTypes = {
    checked: PropTypes.bool.isRequired,
    /** Called when checkbox is toggled. Argument represents checkbox's new state. */
    onChange: PropTypes.func.isRequired,
    label: PropTypes.string,
    disabled: PropTypes.bool
  };

  static defaultProps = {
    disabled: false
  };

  _onClick = ev => {
    const { checked, disabled, onChange } = this.props;
    if (!disabled) {
      onChange(!checked);
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
          <Icon name="check-square" color="#1A9DC6" size={16} />
        ) : (
          <Icon name="square" color="#919191" size={16} type="light" />
        )}
        {!!label && <div className={styles.label}>{label}</div>}
      </div>
    );
  }
}
