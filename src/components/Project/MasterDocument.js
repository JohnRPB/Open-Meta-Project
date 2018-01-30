import React, { Component } from "react";
import update from "immutability-helper";
import { DragDropContext } from "react-dnd";
import HTML5Backend, { NativeTypes } from "react-dnd-html5-backend";
import Dustbin from "./Dustbin";
import Box from "./Box";
import ItemTypes from "./ItemTypes";
import UserInput from "./UserInput";

class Document extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dustbins: [
        { accepts: [ItemTypes.SUMMARY], lastDroppedItem: null },
        { accepts: [ItemTypes.METHOD], lastDroppedItem: null },
        {
          accepts: [ItemTypes.GRAPH, ItemTypes.SUMMARY, NativeTypes.URL],
          lastDroppedItem: null
        },
        { accepts: [ItemTypes.GRAPH, NativeTypes.FILE], lastDroppedItem: null }
      ],
      boxes: [
        { name: "Mean", type: ItemTypes.SUMMARY },
        { name: "Regression", type: ItemTypes.METHOD },
        { name: "Funnel Plot", type: ItemTypes.GRAPH }
      ],
      droppedBoxNames: []
    };
  }

  isDropped(boxName) {
    return this.state.droppedBoxNames.indexOf(boxName) > -1;
  }

  render() {
    const { boxes, dustbins } = this.state;

    return (
      <div>
        <h1>Welcome to your project</h1>
        <h2>Drag and drop analyses onto your document</h2>
        <div class="ui fluid Document">
          <div class="ui grid">
            <div class="three column row">
              <div class="column"> Top-Level Details</div>
              <div class="column"> Results</div>
              <div class="column"> Discussion</div>
            </div>
            <div class="four wide column">
              <div>
                {boxes.map(({ name, type }, index) => (
                  <Box
                    name={name}
                    type={type}
                    isDropped={this.isDropped(name)}
                    key={index}
                  />
                ))}
              </div>
            </div>
            <div class="twelve wide column">
              <UserInput />
              <div style={{ overflow: "hidden" }}>
                {dustbins.map(({ accepts, lastDroppedItem }, index) => (
                  <Dustbin
                    accepts={accepts}
                    lastDroppedItem={lastDroppedItem}
                    onDrop={item => this.handleDrop(index, item)}
                    key={index}
                  />
                ))}
              </div>
              <div class="ui text Document">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa strong. Cum sociis
                natoque penatibus et magnis dis parturient montes, nascetur
                ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu,
                pretium quis, sem. Nulla consequat massa quis enim. Donec pede
                justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim
                justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam
                dictum felis eu pede link mollis pretium. Integer tincidunt.
                Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate
                eleifend tellus. Aenean leo ligula, porttitor eu, consequat
                vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in,
                viverra quis, feugiat a, tellus. Phasellus viverra nulla ut
                metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam
                ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  handleDrop(index, item) {
    const { name } = item;

    this.setState(
      update(this.state, {
        dustbins: {
          [index]: {
            lastDroppedItem: {
              $set: item //immutability helper. replace the target entirely
            }
          }
        },
        droppedBoxNames: name
          ? {
              $push: [name] //immutability helper. push all the items in array on the target
            }
          : {}
      })
    );
  }
}

export default DragDropContext(HTML5Backend)(Document);
