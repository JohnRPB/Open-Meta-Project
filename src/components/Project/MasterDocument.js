import React, { Component } from "react";
import update from "immutability-helper";
import { DragDropContext } from "react-dnd";
import HTML5Backend, { NativeTypes } from "react-dnd-html5-backend";
import Dustbin from "./Dustbin";
import Box from "./Box";
import ItemTypes from "./ItemTypes";
import {
  Dropdown,
  Menu,
  Segment,
  Header,
  Grid,
  Divider,
  Button,
  Image,
  Card,
  Container,
  Popup
} from "semantic-ui-react";

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
    const { boxes, dustbins } = this.state;
    const { analyses } = this.props;

    return (
      <div>
        <h1>Welcome to your project</h1>
        <h2>Drag and drop analyses onto your document</h2>
        <div className="ui fluid Document">
          <div className="ui grid">
            <div className="three column row">
              <div className="column"> Inclusion</div>
            </div>
            <div className="four wide column">
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
            <div className="twelve wide column">
              <div>
                {analyses.map((analysis, index) => {
                  return (
                    <div key={index}>
                      <p>{analysis.textContent}</p>
                      //dustbin graphic image
                    </div>
                  );
                })}
              </div>
              <form onSubmit={this.props.handleSubmit}>
                <textarea name="textContent" placeholder="Input text here" />
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
                <button className="ui primary button" type="submit">
                  +
                </button>
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

MasterDocument = DragDropContext(HTML5Backend)(MasterDocument);

export default MasterDocument;
