import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";
import TextareaAutosize from "react-autosize-textarea";
import Icon from "../Icon/Icon";
import styles from "./TextArea.css";

export default class TextArea extends React.Component {
  static propTypes = {
    name: PropTypes.string,
    value: PropTypes.string.isRequired,
    /** Function called each time input is changed. */
    onChange: PropTypes.func.isRequired,
    onBlur: PropTypes.func,
    placeholder: PropTypes.string,
    minRows: PropTypes.number,
    /** Only set if there should be a max height of the component. */
    maxRows: PropTypes.number,
    error: PropTypes.bool,
    disabled: PropTypes.bool,
    readonly: PropTypes.bool
  };

  static defaultProps = {
    minRows: 3,
    error: false,
    disabled: false,
    readonly: false
  };

  render() {
    const {
      name,
      value,
      placeholder,
      minRows,
      maxRows,
      disabled,
      readonly,
      error,
      onChange,
      onBlur
    } = this.props;
    const className = classNames({
      [styles.textarea]: true,
      [styles.error]: error,
      [styles.disabled]: disabled
    });
    return (
      <div className={styles.container}>
        <TextareaAutosize
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={ev => onChange(ev.target.value)}
          onBlur={onBlur}
          rows={minRows}
          maxRows={maxRows}
          disabled={disabled}
          readOnly={readonly}
          className={className}
        />
        {error && (
          <div className={styles.icon}>
            <Icon name="exclamation" color="#D34242" />
          </div>
        )}
      </div>
    );
  }
}
