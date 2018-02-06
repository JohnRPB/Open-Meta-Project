import React, { Component } from "react";
import { NavLink } from "react-router-dom";
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
import Related from "./Related";
import CollectionModal from "./CollectionModal";
import AnalysisModal from "./AnalysisModal";
import ReviewModal from "./ReviewModal";
import Table from "../Profile/Table";
const faker = require("faker");

class AllAnalyses extends Component {
  constructor() {
    super();
    this.isFetching = true;
    // why arent these showing up???
    this.UserId = "5a74fa36425cf997daab4328";
    this.test = true;
  }

  // componentWillMount() {
  //   console.log("inside will mount => ", this.props);
  //   if (!this.props._token) {
  //     this.props.history.push("/login");
  //   }
  // }

  render() {
    // creating cards from user's analyses
    let analysisCards;
    if (!this.props.isFetching) {
      console.log("MY DATA props => ", this.props);
      analysisCards = this.props.Dashboard.user.analyses
        .slice(0, 3)
        .map(analysis => {
          return (
            <Card
              fluid
              key={analysis._id}
              header={
                <NavLink to={`/analysis/${analysis._id}`}>
                  {analysis.data.header.title}
                </NavLink>
              }
              description={faker.lorem.paragraph()}
            />
          );
        });
    }
    console.log("MYANALYSES props => ", this.props);

    return (
      <div className="ui  vertical masthead center aligned segment">
        <div className="following bar">
          <div className="ui container">
            <Nav userId="5a74fa36425cf997daab4328" />
          </div>
        </div>
        <br />

        <Container>
          <Grid>
            {/* header & sub-menu */}
            <Grid.Row>
              {" "}
              <Grid.Column width={3} />
              <Grid.Column width={3}>
                <Image
                  src={`${this.props.Dashboard.user.profile.image}`}
                  circular
                  size="small"
                />
              </Grid.Column>
              <Grid.Column width={4}>
                <br />
                <Header as="h1" floated="left">
                  {this.props.Dashboard.user.profile.f_name}
                </Header>
                <br />
                <Button.Group basic>
                  <Button>
                    <NavLink to="/myanalyses">Recent</NavLink>
                  </Button>
                  <Button>
                    <NavLink to="/collections">Collections</NavLink>
                  </Button>
                  <Button>
                    <NavLink to="/analyses">Analyses</NavLink>
                  </Button>
                  {/* <Button>
                    <NavLink to="/reviews">Reviews</NavLink>
                  </Button> */}
                </Button.Group>
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
                      <Card.Group>
                        {" "}
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
          </Grid>
        </Container>
        <br />
        <br />
      </div>
    );
  }
}

export default AllAnalyses;
