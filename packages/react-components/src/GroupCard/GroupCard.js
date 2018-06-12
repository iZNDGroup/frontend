import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";
import IconButton from "../IconButton/IconButton";
import styles from "./GroupCard.css";

class GroupCard extends React.Component {
  static propTypes = {
    /** Content rendered within the card. Could be anything that can be rendered. */
    children: PropTypes.node.isRequired,
    title: PropTypes.node,
    /** Labels will appear to the right of the title. */
    labels: PropTypes.arrayOf(
      PropTypes.shape({
        text: PropTypes.string.isRequired,
        color: PropTypes.string
      })
    ),
    /** Actions will appear to the top right of the group card. */
    actions: PropTypes.arrayOf(
      PropTypes.shape({
        icon: PropTypes.string.isRequired,
        action: PropTypes.func.isRequired
      })
    )
  };

  static defaultProps = {
    labels: [],
    actions: []
  };

  render() {
    const {
      children,
      title,
      labels,
      actions,
      selected,
      onContextMenu,
      onClick
    } = this.props;
    const showHeader = !!title || labels.length > 0 || actions.label > 0;
    const className = classNames({
      [styles.groupCard]: true,
      [styles.active]: selected
    });
    return (
      <div
        className={className}
        onContextMenu={onContextMenu}
        onClick={onClick}
      >
        {showHeader && (
          <div className={styles.header}>
            <div className={styles.title}>{title}</div>
            {labels.map((label, index) => (
              <div
                key={`label-${index}`}
                className={styles.label}
                style={{ backgroundColor: label.color }}
              >
                {label.text}
              </div>
            ))}
            <div className={styles.actions}>
              {actions.map((action, index) => (
                <IconButton
                  key={`action-${index}`}
                  icon={action.icon}
                  size={14}
                  onClick={action.action}
                  tooltip={action.tooltip}
                />
              ))}
            </div>
          </div>
        )}
        <div className={styles.content}>{children}</div>
      </div>
    );
  }
}

export default GroupCard;
