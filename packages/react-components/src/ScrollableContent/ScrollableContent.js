import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";
import styles from "./ScrollableContent.css";

export default class ScrollableContent extends React.Component {
  static propTypes = {
    /** Content rendered between the header and the footer. Could be anything that can be rendered. */
    content: PropTypes.node.isRequired,
    /** Content rendered at the top. Could be anything that can be rendered.*/
    header: PropTypes.node,
    /** Content rendered at the bottom. Could be anything that can be rendered. */
    footer: PropTypes.node,
    /** The height of the component. Should be in pixels or percentage. */
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    /** Covers the whole parent (i.e. sets top, right, bottom, left to 0). Usually used when having ScrollableContent in a window component. */
    fullscreen: PropTypes.bool,
    backgroundColor: PropTypes.string,
    /** Scroll offset in pixels from top. */
    scrollPosition: PropTypes.number
  };

  static defaultProps = {
    height: "100%",
    backgroundColor: "transparent",
    scrollPosition: 0
  };

  componentDidMount() {
    const { scrollPosition } = this.props;
    this._scrollTo(scrollPosition);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    const oldPos = this.props.scrollPosition;
    const newPos = nextProps.scrollPosition;
    if (oldPos !== newPos) {
      this._scrollTo(newPos);
    }
  }

  _scrollTo(position) {
    setTimeout(() => {
      this.content.scrollTop = position;
    }, 0);
  }

  render() {
    const {
      content,
      header,
      footer,
      height,
      fullscreen,
      backgroundColor
    } = this.props;
    const className = classNames({
      [styles.scrollableContent]: true,
      [styles.fullscreen]: fullscreen
    });
    return (
      <div className={className} style={{ height, backgroundColor }}>
        {header}
        <div
          className={styles.content}
          ref={component => {
            this.content = component;
          }}
        >
          {content}
        </div>
        {footer}
      </div>
    );
  }
}
