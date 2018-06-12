import React from "react";
import styles from "./ErrorBoundary.css";

export default class ErrorBoundary extends React.Component {
  state = { hasError: false };

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <div className={styles.errorBoundary}>An error occurred</div>;
    }
    return this.props.children;
  }
}
