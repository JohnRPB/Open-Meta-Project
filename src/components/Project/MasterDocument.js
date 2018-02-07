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
import "../../index.css";

import collection from "../../databaseStudies";
import ModuleContainer from "../../containers/Modules/ModuleContainer";

class MasterDocument extends Component {
  constructor(props) {
    super(props);
  }

  state = {};

  handleContextRef = contextRef => this.setState({ contextRef });

  isDropped(boxName) {
    return this.props.droppedBoxNames.indexOf(boxName) > -1;
  }

  componentWillMount() {
    //this.getUpdatedModules();

    let analysisObj = this.props.getAnalysis("5a7b21305483d71df027b6a2");
    console.log(analysisObj);
    // let routingId = this.props.location.pathname.split("/")[-2];
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
      handleDelete,
      editing,
      handleSave,
      handleEdit,
      Analysis
    } = this.props;

    const { contextRef } = this.state;

    let style = {
      border: "5px solid gray"
    };

    return (
      <div>
        <NavContainer />
        <h1>Welcome to analysis ID#:{Analysis._id}</h1>
        <h3>
          Drag and drop modules onto your document. Navigate through document by
          clicking on items
        </h3>
        <Grid centered columns={2}>
          <Grid.Column>
            <div ref={this.handleContextRef}>
              <Segment>
                <Rail position="left">
                  <Sticky context={contextRef}>
                    <h2>Modules</h2>
                    <br />
                    <div>
                      {boxes.map(
                        (
                          { displayName, functionName, content, loading, type },
                          index
                        ) => (
                          <Box
                            content={content}
                            loading={loading}
                            functionName={functionName}
                            displayName={displayName}
                            type={type}
                            isDropped={this.isDropped(displayName)}
                            key={index}
                          />
                        )
                      )}
                    </div>
                  </Sticky>
                </Rail>

                <h2>Document</h2>
                <br />
                <div>
                  {blocks.map((block, index) => {
                    return (
                      <div key={index} className="fluid">
                        <div>
                          <div
                            onClick={e => {
                              handleClick(e, index);
                            }}
                            style={index == showForm ? style : null}
                          >
                            {block.textContent ? (
                              block.textContent
                            ) : (
                              <ModuleContainer moduleIdx={index} />
                            )}
                          </div>
                          <br />
                          <br />
                        </div>
                        {index == showForm ? (
                          <div>
                            <div>
                              {editing ? (
                                <Form onSubmit={e => handleSave(e, index)}>
                                  <TextArea
                                    name="textContent"
                                    defaultValue={blocks[index].textContent}
                                  />
                                  <Button>Save</Button>
                                </Form>
                              ) : (
                                <div>
                                  {blocks[index].textContent ? (
                                    <div>
                                      <Button.Group>
                                        <Button
                                          positive
                                          onClick={e => handleEdit(e, index)}
                                        >
                                          Edit
                                        </Button>
                                        <Button.Or />

                                        <Button
                                          negative
                                          onClick={e => handleDelete(e, index)}
                                        >
                                          Delete
                                        </Button>
                                      </Button.Group>
                                    </div>
                                  ) : (
                                    <Button
                                      negative
                                      onClick={e => handleDelete(e, index)}
                                    >
                                      Delete
                                    </Button>
                                  )}
                                </div>
                              )}
                            </div>
                            <div>
                              <Form onSubmit={e => handleSubmit(e, index)}>
                                <TextArea
                                  name="textContent"
                                  placeholder="Input text below"
                                />
                                <button
                                  className="submitText ui primary button"
                                  type="submit"
                                >
                                  Add Text
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
                        placeholder="Input text below"
                      />
                      <button className="ui primary button" type="submit">
                        Add Text
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
