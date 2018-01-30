import React, { Component } from "react";
import update from "immutability-helper";
import { DragDropContext } from "react-dnd";
import HTML5Backend, { NativeTypes } from "react-dnd-html5-backend";
import Dustbin from "./Dustbin";
import Box from "./Box";
import ItemTypes from "./ItemTypes";

class UserInput extends Component {
  constructor(props) {
    super(props);
    this.rows = 1;
  }

  newRow() {}

  render() {
    return (
      <div>
        <h1> user input</h1>
        <input type="textarea" onChange={newRow()} />
      </div>
    );
  }
}

export default UserInput;
