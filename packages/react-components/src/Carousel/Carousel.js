import PropTypes from "prop-types";
import React from "react";
import Measure from "react-measure";
import { NextArrow, PrevArrow } from "./Arrows";
import styles from "./Carousel.css";

class Carousel extends React.Component {
  static propTypes = {
    /** Items of the Carousel.
     * Children should have a unique `key` property. */
    children: PropTypes.arrayOf(
      PropTypes.shape({
        key: PropTypes.any.isRequired
      }).isRequired
    ),
    /** Minimum dimensions of the children items.
     * Object properties:
     * - `width: number` - if not set, a single item will be shown in full screen. */
    minItemDimensions: PropTypes.shape({
      width: PropTypes.number
    }),
    /** Number of rows to show. */
    rowsToShow: PropTypes.number,
    placeholderHeight: PropTypes.number,
    /** React element for prev arrow. */
    prevArrow: PropTypes.node,
    /** React element for next arrow. */
    nextArrow: PropTypes.node
  };

  static defaultProps = {
    minItemDimensions: {},
    rowsToShow: 1,
    placeholderHeight: 10
  };

  state = { startIndex: 0, colsToShow: 1 };

  UNSAFE_componentWillReceiveProps(nextProps) {
    const { rowsToShow, children } = nextProps;
    const { colsToShow } = this.state;
    const { startIndex } = this.state;
    const itemsPerPage = colsToShow * rowsToShow;
    const childrenCount = React.Children.count(children);
    if (startIndex >= childrenCount && startIndex > 0) {
      // item(s) was deleted on last page
      const pageCount = this._calcPageCount(nextProps);
      this.setState({
        startIndex: (pageCount - 1) * itemsPerPage
      });
    } else if (rowsToShow !== this.props.rowsToShow) {
      // carousel was expanded/collapsed
      this.setState(prevState => ({
        startIndex: Math.floor(startIndex / itemsPerPage) * itemsPerPage
      }));
    }
  }

  _prev = ev => {
    ev.stopPropagation();
    const { rowsToShow } = this.props;
    const { colsToShow } = this.state;
    var itemPerPage = rowsToShow * colsToShow;
    if (this.state.startIndex === 0) return;
    this.setState(prevValue => ({
      startIndex: Math.max(prevValue.startIndex - itemPerPage, 0)
    }));
  };

  _next = ev => {
    ev.stopPropagation();
    const { rowsToShow } = this.props;
    const { colsToShow } = this.state;
    var itemPerPage = rowsToShow * colsToShow;
    var pageCount = this._calcPageCount(this.props);
    var maxStartIndex = (pageCount - 1) * itemPerPage;
    if (this.state.startIndex === maxStartIndex) return;
    this.setState(prevValue => ({
      startIndex: Math.min(prevValue.startIndex + itemPerPage, maxStartIndex)
    }));
  };

  _calcPageCount = props => {
    const { rowsToShow, children } = props;
    const { colsToShow } = this.state;
    var itemsPerPage = colsToShow * rowsToShow;
    const childrenCount = React.Children.count(children);
    return childrenCount === 0
      ? 1
      : Math.floor((childrenCount - 1) / itemsPerPage) + 1;
  };

  _calcCurrentPageIndex = (props, startIndex) => {
    const { rowsToShow } = props;
    const { colsToShow } = this.state;
    const itemsPerPage = colsToShow * rowsToShow;
    return Math.ceil(startIndex / itemsPerPage);
  };

  _handleResize = ({ width: listWidth }) => {
    const { minItemDimensions } = this.props;
    const minItemWidth = minItemDimensions.width;
    if (!minItemWidth) {
      return;
    }
    const colsToShowNew = Math.max(
      Math.floor(listWidth / minItemWidth),
      1 // show at least one column
    );
    if (this.state.colsToShow !== colsToShowNew) {
      this.setState({ colsToShow: colsToShowNew });
    }
  };

  _renderPrev = () => {
    const { startIndex } = this.state;
    const pageCount = this._calcPageCount(this.props);
    const currentPageIndex = this._calcCurrentPageIndex(this.props, startIndex);
    const arrowProps = {
      clickHandler: this._prev,
      currentIndex: startIndex,
      prevArrow: this.props.prevArrow,
      pageCount: pageCount,
      currentPageIndex: currentPageIndex
    };
    return <PrevArrow {...arrowProps} />;
  };

  _renderNext = () => {
    const { startIndex } = this.state;
    const pageCount = this._calcPageCount(this.props);
    const currentPageIndex = this._calcCurrentPageIndex(this.props, startIndex);
    const arrowProps = {
      clickHandler: this._next,
      currentIndex: startIndex,
      nextArrow: this.props.nextArrow,
      pageCount: pageCount,
      currentPageIndex: currentPageIndex
    };
    return <NextArrow {...arrowProps} />;
  };

  _renderItems = () => {
    const { children, rowsToShow, placeholderHeight } = this.props;
    const { startIndex, colsToShow } = this.state;
    const itemsPerPage = colsToShow * rowsToShow;
    const endIndex = startIndex + itemsPerPage;
    const width = 100 / colsToShow + "%";
    const items = React.Children.toArray(children).slice(startIndex, endIndex);
    if (items.length > 0 && items.length < itemsPerPage) {
      for (let i = items.length; i < itemsPerPage; i++) {
        items.push(
          <div style={{ height: placeholderHeight }} key={`placeholder-${i}`} />
        );
      }
    }
    return items.map((child, index) => {
      const key = child.key;
      return (
        <div key={key} style={{ width }}>
          {child}
        </div>
      );
    });
  };

  render() {
    const { children } = this.props;
    const showNavigation = React.Children.count(children) > 0;
    return (
      <div className={styles.carousel}>
        {showNavigation && this._renderPrev()}
        <Measure
          onMeasure={this._handleResize}
          includeMargin={true}
          whitelist={["height", "right", "left"]}
        >
          <div className={styles.list}>{this._renderItems()}</div>
        </Measure>
        {showNavigation && this._renderNext()}
      </div>
    );
  }
}

export default Carousel;
