import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import NavContainer from "../../../containers/Navbar/NavContainer";
import {
  Segment,
  Header,
  Grid,
  Divider,
  Image,
  Card,
  Container,
  Dimmer,
  Loader
} from "semantic-ui-react";
import AnalysisModal from "./AnalysisModal";
import defaultpicture from "../../../assets/images/default.jpg";
const faker = require("faker");

class AllAnalyses extends Component {
  constructor() {
    super();
    this.isFetching = true;
  }

  render() {
    let analysisCards;
    if (!this.props.isFetching) {
      // console.log("MY DATA props => ", this.props);
      analysisCards = this.props.user.analyses.map(analysis => {
        analysis.data.header = analysis.data.header || {};
        return (
          <Card
            fluid
            key={analysis._id}
            header={
              <NavLink to={`/analysis/${analysis._id}`}>
                {analysis.data.header.title || "My Analysis"}
              </NavLink>
            }
            description={faker.lorem.paragraph()}
          />
        );
      });
    }

    if (this.props.isFetching) {
      return (
        <Dimmer active>
          <Loader content="Loading" />
        </Dimmer>
      );
    } else {
      return (
        <div className="ui  vertical masthead center aligned segment">
          <div className="following bar">
            <div className="ui container">
              {/* <Nav userId="5a74fa36425cf997daab4328" /> */}
              <NavContainer />
            </div>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <Container>
            <Grid>
              {/* header & sub-menu */}
              <Grid.Row>
                {" "}
                <Grid.Column width={3} />
                <Grid.Column width={3}>
                  <Image src={defaultpicture} circular size="small" />
                </Grid.Column>
                <Grid.Column width={8}>
                  <br />

                  <Header as="h1" floated="left" textalign="left">
                    {`${this.props.user.profile.fname} ${
                      this.props.user.profile.lname
                    }`}
                    <Header.Subheader>
                      {" "}
                      {this.props.user.profile.title} at{" "}
                      {this.props.user.profile.organization}
                    </Header.Subheader>
                  </Header>

                  <br />
                </Grid.Column>
              </Grid.Row>

              {/* ANALYSES */}
              <Grid.Row id="analyses" className="hidden">
                <Grid.Column width={3}>
                  <br />
                  <AnalysisModal id={this.props.user._id} />
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
                          All Analyses
                        </Header>
                        <Divider />
                        <Card.Group>
                          {analysisCards.length ? (
                            analysisCards
                          ) : (
                            <Card
                              fluid
                              description="No analyses created yet. Would you like to create
                          one now?"
                            />
                          )}
                        </Card.Group>
                        <br />
                      </div>
                    )}
                  </Segment>
                </Grid.Column>
              </Grid.Row>

              {/* REVIEWS */}
              {/* <Grid.Row>
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
            </Grid.Row> */}
            </Grid>
          </Container>
        </div>
      );
    }
  }
}

export default AllAnalyses;
