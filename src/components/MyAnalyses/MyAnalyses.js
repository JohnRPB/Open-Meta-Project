import React, { Component } from "react";
import Nav from "../Nav";
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
  Label,
  Statistic,
  Icon
} from "semantic-ui-react";
import johann from "../../assets/images/johann.jpeg";
import Related from "./Related";
import ModalForm from "./ModalForm";
import Table from "../Profile/Table";
const mongoose = require("mongoose");

class MyAnalyses extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getAnalyses("*");
  }

  // let analysisCards = [{header:state.analyses[0].header.title}, {header:state.analyses[1].header.title}, {header:state.analyses[2].header.title}]

  render() {
    console.log("props =>", this.props);
    return (
      <div className="ui  vertical masthead center aligned segment">
        <div className="following bar">
          <div className="ui container">
            <Nav />
          </div>
        </div>
        <br />
        <br />
        <Container>
          <Grid>
            <Grid.Row>
              {" "}
              <Grid.Column width={3} />
              <Grid.Column width={3}>
                <Image src={johann} circular size="small" />
              </Grid.Column>
              <Grid.Column width={4}>
                <br />
                <h1>Johann</h1>
              </Grid.Column>
            </Grid.Row>

            {/* COLLECTIONS */}
            <Grid.Row>
              <Grid.Column width={3}>
                <br />
                <ModalForm />
              </Grid.Column>
              <Grid.Column width={13}>
                <Segment>
                  {" "}
                  <Header as="h1" textalign="left">
                    Recent Collections
                  </Header>
                  <Divider />
                  <Related />
                  <br />
                  <p>See all collections</p>
                </Segment>
              </Grid.Column>
            </Grid.Row>

            {/* ANALYSES */}
            <Grid.Row>
              <Grid.Column width={3}>
                <br />
                <Button>New Analysis</Button>
              </Grid.Column>

              <Grid.Column width={13}>
                <Segment>
                  <Header as="h1" textalign="left">
                    Recent Analyses
                  </Header>
                  <Divider />
                  <Card.Group>
                    <Card fluid color="red" header="Option 1" />
                    <Card fluid color="orange" header="Option 2" />
                    <Card fluid color="yellow" header="Option 3" />
                  </Card.Group>
                  <br />
                  <p>See all analyses</p>
                </Segment>
              </Grid.Column>
            </Grid.Row>

            {/* REVIEWS */}
            <Grid.Row>
              <Grid.Column width={3}>
                <br />
                <Button>New Review</Button>
              </Grid.Column>

              <Grid.Column width={13}>
                <Segment>
                  <Header as="h1" textalign="left">
                    Recent Reviews
                  </Header>
                  <Divider />
                  <Card.Group>
                    <Card fluid color="red" header="Option 1" />
                    <Card fluid color="orange" header="Option 2" />
                    <Card fluid color="yellow" header="Option 3" />
                  </Card.Group>
                  <br />
                  <p>See all reviews</p>
                </Segment>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default MyAnalyses;
