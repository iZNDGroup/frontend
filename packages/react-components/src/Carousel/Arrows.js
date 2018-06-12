import React from "react";
import { DefaultPrevArrow, DefaultNextArrow } from "./DefaultArrows";

class PrevArrow extends React.Component {
  clickHandler(e) {
    if (e) {
      e.preventDefault();
    }
    this.props.clickHandler(e);
  }
  render() {
    let { pageCount, currentPageIndex } = this.props;
    let prevHandler = this.clickHandler.bind(this);
    let arrowProps = {
      onClick: prevHandler,
      pageCount: pageCount,
      currentPageIndex: currentPageIndex
    };

    let prevArrow;
    if (this.props.prevArrow) {
      prevArrow = React.cloneElement(this.props.prevArrow, { ...arrowProps });
    } else {
      prevArrow = <DefaultPrevArrow {...arrowProps} />;
    }
    return prevArrow;
  }
}

class NextArrow extends React.Component {
  clickHandler(e) {
    if (e) {
      e.preventDefault();
    }
    this.props.clickHandler(e);
  }
  render() {
    let { pageCount, currentPageIndex } = this.props;
    let nextHandler = this.clickHandler.bind(this);
    let arrowProps = {
      onClick: nextHandler,
      pageCount: pageCount,
      currentPageIndex: currentPageIndex
    };

    let nextArrow;
    if (this.props.nextArrow) {
      nextArrow = React.cloneElement(this.props.nextArrow, { ...arrowProps });
    } else {
      nextArrow = <DefaultNextArrow {...arrowProps} />;
    }
    return nextArrow;
  }
}

export { PrevArrow, NextArrow };
