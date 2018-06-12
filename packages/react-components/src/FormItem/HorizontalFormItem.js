import PropTypes from "prop-types";
import React from "react";
import styles from "./HorizontalFormItem.css";

export default class HorizontalFormItem extends React.Component {
  static propTypes = {
    labelComponent: PropTypes.node,
    valueComponent: PropTypes.node,
    textComponent: PropTypes.node
  };

  render() {
    const { labelComponent, valueComponent, textComponent } = this.props;
    return (
      <div>
        <div className={styles.row}>
          <div className={styles.label}>{labelComponent}</div>
          <div className={styles.value}>{valueComponent}</div>
        </div>
        {!!textComponent && (
          <div className={styles.row}>
            <div className={styles.text}>{textComponent}</div>
          </div>
        )}
      </div>
    );
  }
}
