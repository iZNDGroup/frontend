import classNames from "classnames";
import PropTypes from "prop-types";
import React, { Fragment } from "react";
import Icon from "../Icon/Icon";
import HorizontalFormItem from "./HorizontalFormItem";
import VerticalFormItem from "./VerticalFormItem";
import styles from "./FormItem.css";

export default class FormItem extends React.Component {
  static propTypes = {
    /** Content that will be placed to the right of the label. */
    children: PropTypes.node,
    label: PropTypes.string.isRequired,
    labelPosition: PropTypes.oneOf(["top", "left"]),
    /** Set the alignment if there are multiple children. */
    childrenAlignment: PropTypes.oneOf(["horizontal", "vertical"]),
    /** Indicates if form component is required with a asterisk (*) next to the label. Only used for visualization purpose. Use validationSchema in the Form component to do the actual validation.  */
    required: PropTypes.bool,
    /** Text displayed under the form component. */
    helperText: PropTypes.string,
    /** Text displayed under the form component. If both helperText and errorText are set, only errorText will be shown. */
    errorText: PropTypes.string
  };

  static defaultProps = {
    labelPosition: "left",
    childrenAlignment: "horizontal",
    required: false
  };

  _renderText = () => {
    const { errorText, helperText } = this.props;
    if (errorText) {
      return <div className={styles.errorText}>{errorText}</div>;
    } else if (helperText) {
      return <div className={styles.helperText}>{helperText}</div>;
    }
    return null;
  };

  _renderLabel = () => {
    const { label, required } = this.props;
    return (
      <Fragment>
        {label}
        {required && (
          <div className={styles.required}>
            <Icon
              name="asterisk"
              size={8}
              color="#1a9dc6"
              tooltip="Required field"
            />
          </div>
        )}
      </Fragment>
    );
  };

  _renderChildren = () => {
    const { children, childrenAlignment } = this.props;
    const className = classNames({
      [styles.horizontalChildren]: childrenAlignment === "horizontal",
      [styles.verticalChildren]: childrenAlignment === "vertical"
    });
    return <div className={className}>{children}</div>;
  };

  render() {
    const { labelPosition } = this.props;
    const Component =
      labelPosition === "top" ? VerticalFormItem : HorizontalFormItem;
    return (
      <div className={styles.container}>
        <Component
          labelComponent={this._renderLabel()}
          valueComponent={this._renderChildren()}
          textComponent={this._renderText()}
        />
      </div>
    );
  }
}
