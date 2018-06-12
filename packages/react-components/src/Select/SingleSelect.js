import PropTypes from "prop-types";
import React from "react";
import styles from "./SingleSelect.css";

export default class SingleSelect extends React.Component {
  static propTypes = {
    showSearch: PropTypes.bool,
    selectedOption: PropTypes.object,
    value: PropTypes.string,
    onChange: PropTypes.func
  };

  focus() {
    this._input.focus();
  }

  render() {
    const { showSearch, selectedOption, value, onChange } = this.props;
    if (showSearch) {
      return (
        <input
          ref={component => {
            this._input = component;
          }}
          type="text"
          value={value}
          placeholder={selectedOption.name}
          className={styles.search}
          onChange={onChange}
        />
      );
    } else {
      return <div className={styles.value}>{selectedOption.name}</div>;
    }
  }
}
