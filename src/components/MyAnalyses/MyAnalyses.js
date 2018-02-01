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

const analysisStyle = {
  width: "700px",
  height: "150px",
  overflowX: "scroll"
};

class MyAnalyses extends Component {
  constructor(props) {
    super(props);
  }

  // componentDidMount() {
  //   this.props.getAnalyses("*");
  // }

  render() {
    return (
      <div class="ui  vertical masthead center aligned segment">
        <div class="following bar">
          <div class="ui container">
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
                <Image src={johann} circular="true" size="small" />
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
