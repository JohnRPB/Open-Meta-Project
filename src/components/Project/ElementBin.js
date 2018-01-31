import React, { Component } from "react";
import PropTypes from "prop-types";
import { DropTarget } from "react-dnd";

const style = {
  height: "25rem",
  width: "25rem",
  marginRight: "1.5rem",
  marginBottom: "1.5rem",
  color: "black",
  padding: "1rem",
  textAlign: "center",
  fontSize: "1rem",
  lineHeight: "normal",
  float: "left"
};

const elementbinTarget = {
  drop(props, monitor) {
    props.onDrop(monitor.getItem());
  }
};

class ElementBin extends Component {
  render() {
    const {
      accepts,
      isOver,
      canDrop,
      connectDropTarget,
      lastDroppedItem
    } = this.props;
    const isActive = isOver && canDrop;

    let backgroundColor = "#ffffff"; //
    if (isActive) {
      backgroundColor = "darkgreen";
    } else if (canDrop) {
      backgroundColor = "darkkhaki";
    }

    return connectDropTarget(
      <div style={{ ...style, backgroundColor }}>
        {isActive
          ? "Release to drop"
          : `Insert graphic here. This field accepts: ${accepts.join(", ")}`}

        {lastDroppedItem && (
          <p>Last dropped: {JSON.stringify(lastDroppedItem)}</p>
        )}
      </div>
    );
  }
}

ElementBin.propTypes = {
  connectDropTarget: PropTypes.func.isRequired,
  isOver: PropTypes.bool.isRequired,
  canDrop: PropTypes.bool.isRequired,
  accepts: PropTypes.arrayOf(PropTypes.string).isRequired,
  lastDroppedItem: PropTypes.object,
  onDrop: PropTypes.func.isRequired
};

export default DropTarget(
  props => props.accepts,
  elementbinTarget,
  (connect, monitor) => ({
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop()
  })
)(ElementBin);
