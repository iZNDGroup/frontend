import PropTypes from "prop-types";
import React from "react";
import IconButton from "../IconButton/IconButton";
import styles from "./MultiSelect.css";

export default class MultiSelect extends React.Component {
  static propTypes = {
    showSearch: PropTypes.bool,
    value: PropTypes.string,
    onRemove: PropTypes.func,
    onChange: PropTypes.func
  };

  focus() {
    this._input.focus();
  }

  _onRemove = (ev, index) => {
    ev.stopPropagation();
    const { onRemove } = this.props;
    if (onRemove) {
      onRemove(index);
    }
  };

  render() {
    const {
      showSearch,
      selectedOptions,
      value,
      onRemove,
      onChange
    } = this.props;
    return (
      <div className={styles.container}>
        {selectedOptions.map((option, index) => (
          <div className={styles.option} key={`option-${index}`}>
            <div className={styles.label}>{option.name}</div>
            <IconButton
              icon="times"
              color="#4b4c4d"
              size={11}
              disabled={!onRemove}
              onClick={ev => this._onRemove(ev, index)}
            />
          </div>
        ))}
        {showSearch && (
          <input
            ref={component => {
              this._input = component;
            }}
            type="text"
            value={value}
            className={styles.search}
            onChange={onChange}
          />
        )}
      </div>
    );
  }
}
