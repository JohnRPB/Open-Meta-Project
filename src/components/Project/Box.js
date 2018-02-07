import React, { Component } from "react";
import PropTypes from "prop-types";
import { DragSource } from "react-dnd";
import studies from "../../newStudies.js";
import ItemTypes from "./ItemTypes";

const style = {
  border: "1px dashed gray",
  backgroundColor: "white",
  padding: "0.5rem 1rem",
  marginRight: "1.5rem",
  marginBottom: "1.5rem",
  cursor: "move",
  float: "left"
};

let createStudies = () =>
  studies.map(study => Object.assign({}, study));

let createModule = (name) => {
  return {
    name: name,
    type: "graphic",
    outputLoc:
      "http://www.sharpsightlabs.com/wp-content/uploads/2014/11/scatterplot-in-r_basic.png",
    studies: createStudies()
  };
};

const boxSource = {
  beginDrag(props) {
    return {
      name: props.name,
      loading: props.loading,
      type: props.type,
      content: createModule(props.name)
    };
  },

  isDragging(props, monitor) {
    const item = monitor.getItem();
    return props.name === item.name;
  }
};

class Box extends Component {
  render() {
    const { name, isDropped, isDragging, connectDragSource } = this.props;
    const opacity = isDragging ? 0.4 : 1;

    return connectDragSource(
      <div style={{ ...style, opacity }}>
        {isDropped ? <s>{name}</s> : name}
      </div>
    );
  }
}

Box.propTypes = {
  connectDragSource: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  isDropped: PropTypes.bool.isRequired
};

export default DragSource(
  props => props.type,
  boxSource,
  (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  })
)(Box);
