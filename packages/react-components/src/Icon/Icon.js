import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";
import styles from "./Icon.css";

export default class Icon extends React.Component {
  static propTypes = {
    /** Name of the Font Awesome icon. */
    name: PropTypes.string.isRequired,
    tooltip: PropTypes.string,
    color: PropTypes.string,
    size: PropTypes.number,
    type: PropTypes.oneOf(["solid", "regular", "light"]),
    /** Shadow depth */
    shadowDepth: PropTypes.oneOf([0, 3])
  };

  static defaultProps = {
    color: "#000",
    size: 16,
    type: "solid",
    shadowDepth: 0
  };

  render() {
    const { name, tooltip, color, size, type, shadowDepth } = this.props;
    const className = classNames(
      shadowDepth !== 0 && styles[`shadow${shadowDepth}`]
    );
    return (
      <div className={styles.container} title={tooltip}>
        <svg
          style={{ fill: color, height: size, width: size }}
          className={className}
        >
          <use
            xlinkHref={Franson.Util.SvgServerPathResolver.resolveSingle({
              lib: "FontAwesome",
              type: type,
              name: name
            })}
          />
        </svg>
      </div>
    );
  }
}
