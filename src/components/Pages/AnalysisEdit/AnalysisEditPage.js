import React, { Component } from "react";
import NavContainer from "../../../containers/Navbar/NavContainer";
// import update from "immutability-helper";
import { DragDropContext } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
import Dustbin from "./Dustbin";
import Box from "./Box";
import {
  // Dropdown,
  // Menu,
  Segment,
  // Header,
  Grid,
  Divider,
  Button,
  // Image,
  // Card,
  Container,
  // Popup,
  TextArea,
  Form,
  // Rail,
  Sticky
} from "semantic-ui-react";
import "../../../index.css";

import {
  // BrowserRouter as Router,
  // Route,
  // Switch,
  NavLink
} from "react-router-dom";

import ModuleContainer from "../../../containers/Modules/ModuleContainer";

class AnalysisEditPage extends Component {
  // constructor(props) {
  //   super(props);
  // }

  state = {};

  handleContextRef = contextRef => this.setState({ contextRef });

  isDropped(boxName) {
    return this.props.droppedBoxNames.indexOf(boxName) > -1;
  }

  componentWillMount() {
    //this.getUpdatedModules();

    this.props.getAnalysis(this.props.analysisId);

    // let routingId = this.props.location.pathname.split("/")[-2];
  }

  // shouldComponentUpdate(nextProps) {
  //   let change = false;
  //   change = change ||  nextProps.blocks.length !== this.props.blocks.length;
  //   change = change ||  nextProps.showForm !== this.props.showForm;
  //
  //   return change;
  //
  // }

  render() {
    // console.log("this props => ", this.props);
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
      Analysis,
      saveDocument,
      title
    } = this.props;

    const { contextRef } = this.state;

    let style = {
      border: "3px solid pink",
      borderRadius:'8px'
    };

    return (
      <div>
        <NavContainer />
        <Container>
          <br />
          <br />
          <br />
          <br />
          <center>
            <h2>{title}</h2>
          </center>
          <Divider />
          <center>
            <h3>
              Drag and drop modules onto your document. Navigate through
              document by clicking on items
            </h3>
            <br />
            <br />
          </center>{" "}
          <div ref={this.handleContextRef}>
            {/* ---------------------- */}
            {/*       modules          */}
            {/* ---------------------- */}

            <Grid columns={2}>
              <Grid.Column width={4}>
                <Sticky context={contextRef}>
                  <h2>Modules</h2>
                  <Divider />
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

                    <NavLink
                      className="ui button brown"
                      to={`/analysis/${Analysis._id}`}
                    >
                      Go to Analysis page
                    </NavLink>

                    <br />
                    <br />
                    <Button
                      onClick={e => {
                        let uAnalysis = Analysis;
                        uAnalysis.data.blocks = this.props.blocks;
                        saveDocument(e, Analysis._id, uAnalysis);
                        alert("Document saved and analysis is updated!");
                      }}
                      color="orange"
                    >
                      Save Document
                    </Button>
                  </div>
                </Sticky>
              </Grid.Column>

              {/* ---------------------- */}
              {/*      MAIN WINDOW       */}
              {/* ---------------------- */}
              <Grid.Column width={1} />
              <Grid.Column width={11}>
                <Segment>
                  <h2>Document</h2>
                  <Divider />
                  <div>
                    {blocks.map((block, index) => {
                      return (
                        <div key={index} className="fluid">
                          <div>
                            <div
                              onClick={e => {
                                handleClick(e, index);
                              }}
                              style={index === showForm ? style : null}
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
                          {index === showForm ? (
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
                                            onClick={e =>
                                              handleDelete(e, index)
                                            }
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
                                    placeholder="Input text"
                                  />{" "}
                                  <br />
                                  <br />
                                  <div>
                                    {dustbins.map(
                                      (
                                        { accepts, lastDroppedItem },
                                        index2
                                      ) => (
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
                                  <br />
                                  <br />
                                  <button
                                    className="submitText ui primary button"
                                    type="submit"
                                  >
                                    Submit
                                  </button>
                                </Form>
                                {/* <div>
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
                                </div> */}
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
                        <TextArea name="textContent" placeholder="Input text" />
                        <br />
                        <br />
                        <div>
                          {dustbins.map(
                            ({ accepts, lastDroppedItem }, index) => (
                              <Dustbin
                                accepts={accepts}
                                lastDroppedItem={lastDroppedItem}
                                onDrop={item => handleDrop(index, item)}
                                key={index}
                              />
                            )
                          )}
                        </div>
                        <br />
                        <br />
                        <button className="ui primary button" type="submit">
                          Submit
                        </button>
                      </Form>
                    </div>
                  ) : null}
                </Segment>
              </Grid.Column>
            </Grid>
          </div>
        </Container>
      </div>
    );
  }
}

AnalysisEditPage = DragDropContext(HTML5Backend)(AnalysisEditPage);

export default AnalysisEditPage;
