import React from "react";
import Icon from "../Icon/Icon";
import styles from "./Carousel.css";

class DefaultArrow extends React.Component {
  render() {
    var { onClick, remainingPageCount, iconName } = this.props;
    if (remainingPageCount > 0) {
      return (
        <div className={styles.navigation} onClick={e => onClick(e)}>
          <Icon
            name={iconName}
            label={remainingPageCount}
            type="regular"
            size={14}
          />
          <div>{remainingPageCount}</div>
        </div>
      );
    }
    return null;
  }
}

export const DefaultPrevArrow = props => {
  const remainingPageCount = props.currentPageIndex;

  return (
    <DefaultArrow
      {...props}
      remainingPageCount={remainingPageCount}
      iconName="angle-left"
      onClick={props.onClick}
    />
  );
};

export const DefaultNextArrow = props => {
  const remainingPageCount = props.pageCount - props.currentPageIndex - 1;

  return (
    <DefaultArrow
      {...props}
      remainingPageCount={remainingPageCount}
      iconName="angle-right"
      onClick={props.onClick}
    />
  );
};
