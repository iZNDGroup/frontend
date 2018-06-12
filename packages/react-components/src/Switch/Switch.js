import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";
import styles from "./Switch.css";

export default class Switch extends React.Component {
  static propTypes = {
    /** Label displayed to the left of the switch. */
    label: PropTypes.string,
    checked: PropTypes.bool.isRequired,
    /** Called when switch is toggled. Argument represents switch's new state. */
    onChange: PropTypes.func.isRequired,
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
    const outerClassName = classNames({
      [styles.switchContainer]: true,
      [styles.switchContainerActive]: checked,
      [styles.switchContainerDisabled]: disabled
    });
    const innerClassName = classNames({
      [styles.switch]: true,
      [styles.switchActive]: checked
    });
    return (
      <div className={styles.container}>
        {!!label && <div className={styles.label}>{label}</div>}
        <div className={outerClassName} onClick={this._onClick}>
          <div className={innerClassName} />
        </div>
      </div>
    );
  }
}
