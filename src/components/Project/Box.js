import React, {Component} from "react";
import PropTypes from "prop-types";
import {DragSource} from "react-dnd";
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

//drop studies in here
let createStudies = () => studies.map(study => Object.assign({}, study));

let createModule = name => {
  return {
    name: name,
    type: "graphic",
    outputLoc: "Click on studies to load image",
    studies: createStudies()
  };
};

const boxSource = {
  beginDrag(props) {
    return {
      displayName: props.displayName,
      loading: props.loading,
      type: props.type,
      functionName: props.functionName,
      content: createModule(props.functionName)
    };
  },

  isDragging(props, monitor) {
    const item = monitor.getItem();
    return props.displayName === item.displayName;
  }
};

class Box extends Component {
  render() {
    const {displayName, isDropped, isDragging, connectDragSource} = this.props;
    const opacity = isDragging ? 0.4 : 1;

    return connectDragSource(
      <div style={{...style, opacity}}>
        {isDropped ? <s>{displayName}</s> : displayName}
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
