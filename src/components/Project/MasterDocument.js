import React, { Component } from "react";
import NavContainer from "../../containers/NavContainer";
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
  Popup,
  TextArea,
  Form,
  Rail,
  Sticky
} from "semantic-ui-react";

import collection from "../../databaseStudies";
import Module from "../Modules/Module";

class MasterDocument extends Component {
  constructor(props) {
    super(props);
  }

  state = {};

  handleContextRef = contextRef => this.setState({ contextRef });

  isDropped(boxName) {
    return this.props.droppedBoxNames.indexOf(boxName) > -1;
  }

  render() {
    console.log("this props => ", this.props);
    // const { boxes, dustbins } = this.state;
    const {
      blocks,
      boxes,
      dustbins,
      handleDrop,
      handleSubmit,
      handleClick,
      showForm,
      handleDelete
    } = this.props;

    const { contextRef } = this.state;

    return (
      <div>
        <NavContainer />
        <h1>Welcome to your project</h1>
        <h3>
          Drag and drop modules onto your document. Navigate through document by
          clicking on items
        </h3>
        <Grid centered columns={2}>
          <Grid.Column>
            <div ref={this.handleContextRef}>
              <Segment>
                {/* <Grid.Column width={4}> */}
                <Rail position="left">
                  <Sticky context={contextRef}>
                    <h2>Modules</h2>
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
                  </Sticky>
                </Rail>
                {/* </Grid.Column> */}

                {/* <Grid.Column width={12}> */}
                <h2>Document</h2>
                <div>
                  {blocks.map((block, index) => {
                    return (
                      <div key={index} className="fluid">
                        <ul>
                          <li onClick={e => handleClick(e, index)}>
                            {block.textContent
                              ? block.textContent
                              : JSON.stringify(block)}
                          </li>
                          <br />
                          <br />
                          <br />
                        </ul>
                        {index == showForm ? (
                          <div>
                            <Form onSubmit={e => handleSubmit(e, index)}>
                              <TextArea
                                name="textContent"
                                placeholder="Input text here"
                              />
                              <button
                                className="submitText ui primary button"
                                type="submit"
                              >
                                +
                              </button>
                            </Form>
                            <div>
                              {dustbins.map(
                                ({ accepts, lastDroppedItem }, index2) => (
                                  <Dustbin
                                    accepts={accepts}
                                    lastDroppedItem={lastDroppedItem}
                                    onDrop={item =>
                                      handleDrop(index2, item, index)
                                    }
                                    key={index2}
                                  />
                                )
                              )}
                            </div>
                            <div>
                              <button
                                className="negative ui button"
                                onClick={e => handleDelete(e, index)}
                              >
                                Delete
                              </button>
                            </div>
                          </div>
                        ) : null}
                      </div>
                    );
                  })}
                </div>
                {blocks.length < 1 ? (
                  <div className="Initial Submission">
                    <Form onSubmit={handleSubmit}>
                      <TextArea
                        name="textContent"
                        placeholder="Input text here"
                      />
                      <button className="ui primary button" type="submit">
                        +
                      </button>
                    </Form>
                    <div>
                      {dustbins.map(({ accepts, lastDroppedItem }, index) => (
                        <Dustbin
                          accepts={accepts}
                          lastDroppedItem={lastDroppedItem}
                          onDrop={item => handleDrop(index, item)}
                          key={index}
                        />
                      ))}
                    </div>
                  </div>
                ) : null}
                {/* </Grid.Column> */}

                <Module moduleIdx={0} />
              </Segment>
            </div>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

MasterDocument = DragDropContext(HTML5Backend)(MasterDocument);

export default MasterDocument;
