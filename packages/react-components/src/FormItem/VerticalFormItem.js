import PropTypes from "prop-types";
import React from "react";
import styles from "./VerticalFormItem.css";

export default class VerticalFormItem extends React.Component {
  static propTypes = {
    labelComponent: PropTypes.node,
    valueComponent: PropTypes.node,
    textComponent: PropTypes.node
  };

  render() {
    const { labelComponent, valueComponent, textComponent } = this.props;
    return (
      <div>
        <div className={styles.label}>{labelComponent}</div>
        <div>{valueComponent}</div>
        <div className={styles.text}>{textComponent}</div>
      </div>
    );
  }
}
