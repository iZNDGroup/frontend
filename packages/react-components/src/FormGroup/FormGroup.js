import PropTypes from "prop-types";
import React from "react";
import styles from "./FormGroup.css";

export default class FormGroup extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string,
    helperText: PropTypes.string
  };

  render() {
    const { children, title, helperText } = this.props;
    const showHeader = !!title || !!helperText;
    return (
      <div className={styles.container}>
        {showHeader && (
          <div className={styles.header}>
            {!!title && <div className={styles.title}>{title}</div>}
            {!!helperText && (
              <div className={styles.helperText}>{helperText}</div>
            )}
          </div>
        )}
        {children}
      </div>
    );
  }
}
