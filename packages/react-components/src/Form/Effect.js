import PropTypes from "prop-types";
import React from "react";

export default class Effect extends React.Component {
  static propTypes = {
    onDirtyChange: PropTypes.func
  };

  static contextTypes = {
    formik: PropTypes.object
  };

  UNSAFE_componentWillReceiveProps(nextProps, nextContext) {
    const { dirty: nextDirty } = nextContext.formik;
    const { dirty } = this.context.formik;
    if (nextDirty !== dirty && this.props.onDirtyChange) {
      this.props.onDirtyChange(nextDirty);
    }
  }

  render() {
    return null;
  }
}
