import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";
import Icon from "../Icon/Icon";
import styles from "./TextInput.css";

export default class TextInput extends React.Component {
  static propTypes = {
    name: PropTypes.string,
    value: PropTypes.string.isRequired,
    /** Function called each time input is changed. */
    onChange: PropTypes.func.isRequired,
    onBlur: PropTypes.func,
    type: PropTypes.oneOf(["text", "password"]),
    placeholder: PropTypes.string,
    /** Text which is placed to the right of the input. Unlike `placeholder` the text will remain when user starts typing. */
    fixedPlaceholder: PropTypes.string,
    /** Minimum width of the input. The width is by default responsive to its parent's width. */
    minWidth: PropTypes.number,
    /** Maximum width of the input. The width is by default responsive to its parent's width. */
    maxWidth: PropTypes.number,
    error: PropTypes.bool,
    disabled: PropTypes.bool,
    readonly: PropTypes.bool
  };

  static defaultProps = {
    type: "text",
    error: false,
    disabled: false,
    readonly: false
  };

  render() {
    const {
      type,
      name,
      value,
      placeholder,
      fixedPlaceholder,
      minWidth,
      maxWidth,
      disabled,
      readonly,
      error,
      onChange,
      onBlur
    } = this.props;
    const className = classNames({
      [styles.input]: true,
      [styles.error]: error,
      [styles.disabled]: disabled
    });
    return (
      <div className={styles.container} style={{ minWidth, maxWidth }}>
        <input
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={ev => onChange(ev.target.value)}
          onBlur={onBlur}
          disabled={disabled}
          readOnly={readonly}
          className={className}
        />
        <div className={styles.rightContent}>
          {!!fixedPlaceholder && (
            <div className={styles.fixedPlaceholder}>{fixedPlaceholder}</div>
          )}
          {error && (
            <div className={styles.icon}>
              <Icon name="exclamation" color="#D34242" />
            </div>
          )}
        </div>
      </div>
    );
  }
}
