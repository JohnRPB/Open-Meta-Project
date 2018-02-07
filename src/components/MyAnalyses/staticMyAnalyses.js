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
  Icon,
  Dimmer,
  Loader
} from "semantic-ui-react";
import johann from "../../assets/images/johann.jpeg";
import Related from "./Related";
import CollectionModal from "./CollectionModal";
import AnalysisModal from "./AnalysisModal";
import ReviewModal from "./ReviewModal";
import Table from "../Profile/Table";
const faker = require("faker");

class MyAnalyses extends Component {
  constructor() {
    super();
    this.isFetching = true;
    // why arent these showing up???
    this.UserId = "5a74fa36425cf997daab4328";
    this.test = true;
  }

  componentWillMount() {
    this.props.getAnalyses("*");
    // this.props.getCollections("*")
  }

  render() {
    console.log("props after render => ", this.props);

    let analysisCards;
    if (!this.props.isFetching) {
      console.log("props => ", this.props);
      analysisCards = this.props.MyAnalyses.slice(0, 3).map(analysis => {
        return (
          <Card
            fluid
            header={analysis.data.header.title}
            description={faker.lorem.paragraph()}
          />
        );
      });
    }

    console.log("props in my analysis => ", this.props);
    return (
      <div className="ui  vertical masthead center aligned segment">
        <div className="following bar">
          <div className="ui container">
            <Nav userId="5a74fa36425cf997daab4328" />
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
                <Header as="h1" floated="left">
                  Johann
                </Header>
                <br />
                <Button.Group basic>
                  <Button>Recent</Button>
                  <Button>Collections</Button>
                  <Button>Analyses</Button>
                  <Button>Reviews</Button>
                </Button.Group>
              </Grid.Column>
            </Grid.Row>

            {/* COLLECTIONS */}
            <Grid.Row>
              <Grid.Column width={3}>
                <br />
                <CollectionModal />
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
                <AnalysisModal />
              </Grid.Column>

              <Grid.Column width={13}>
                <Segment>
                  {this.props.isFetching ? (
                    <Dimmer active>
                      <Loader />
                    </Dimmer>
                  ) : (
                    <div>
                      <Header as="h1" textalign="left">
                        Recent Analyses
                      </Header>
                      <Divider />
                      <Card.Group>{analysisCards}</Card.Group>
                      <br />
                      <p>See all analyses</p>
                    </div>
                  )}
                </Segment>
              </Grid.Column>
            </Grid.Row>

            {/* REVIEWS */}
            <Grid.Row>
              <Grid.Column width={3}>
                <br />
                <ReviewModal />
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
