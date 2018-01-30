import React, { Component } from "react";
import update from "immutability-helper";
import { DragDropContext } from "react-dnd";
import HTML5Backend, { NativeTypes } from "react-dnd-html5-backend";
import Dustbin from "./Dustbin";
import Box from "./Box";
import ItemTypes from "./ItemTypes";

class MasterDocument extends Component {
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

  // render portion

  render() {
    console.log("this props => ", this.props);
    const { boxes, dustbins, analyses } = this.state;

    return (
      <div>
        <h1>Welcome to your project</h1>
        <h2>Drag and drop analyses onto your document</h2>
        <div class="ui fluid Document">
          <div class="ui grid">
            <div class="three column row">
              <div class="column"> Inclusion</div>
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
              <form onSubmit={this.props.handleSubmit}>
                <textarea name="content" placeholder="Input text here" />
                <br />
                <div>
                  {dustbins.map(({ accepts, lastDroppedItem }, index) => (
                    <Dustbin
                      accepts={accepts}
                      lastDroppedItem={lastDroppedItem}
                      onDrop={item => this.handleDrop(index, item)}
                      key={index}
                    />
                  ))}
                </div>
                <input type="submit" value="Add Element" />
              </form>
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

export default DragDropContext(HTML5Backend)(MasterDocument);
