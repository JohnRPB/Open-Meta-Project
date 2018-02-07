import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import NavContainer from "../../containers/NavContainer";
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
import defaultpicture from "../../assets/images/default.jpg";
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
    let analysisCards;
<<<<<<< HEAD
    if (!this.props.MyAnalysesPage.isFetching) {
      console.log("MyAnalyses: this.props: ", this.props);

      // creates cards for each analysis
      analysisCards = this.props.MyAnalysesPage.user.analyses.map(analysis => {
        return (
          <Card
            fluid
            key={analysis._id}
            header={
              <NavLink to={`/analysis/${analysis._id}`}>
                {analysis._id}
                {/* {analysis.data.header.title} */}
              </NavLink>
            }
            description={faker.lorem.paragraph()}
          />
        );
      });
=======
    if (!this.props.isFetching) {
      console.log("MY DATA props => ", this.props);
      analysisCards = this.props.Dashboard.user.analyses
        .slice(0, 3)
        .map(analysis => {
          analysis.data.header = analysis.data.header || {};
          return (
            <Card
              fluid
              key={analysis._id}
              header={
                <NavLink to={`/analysis/${analysis._id}`}>
                  { analysis.data.header.title || "My Analysis" }
                </NavLink>
              }
              description={faker.lorem.paragraph()}
            />
          );
        });
>>>>>>> 0d6a8585241ae684bc249d593166c4756b507086
    }

    if (this.props.MyAnalysesPage.isFetching) {
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
          <Container>
            <Grid>
              {/* header & sub-menu */}
              <Grid.Row>
                {" "}
                <Grid.Column width={3} />
                <Grid.Column width={3}>
                  <Image src={defaultpicture} circular size="small" />
                </Grid.Column>
                <Grid.Column width={4}>
                  <br />
                  <Header as="h1" floated="left">
                    {this.props.MyAnalysesPage.user.profile.f_name}
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
              <Grid.Row id="analyses" className="hidden">
                <Grid.Column width={3}>
                  <br />
                  <AnalysisModal id={this.props.MyAnalysesPage.user._id} />
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
                        <NavLink to="/analyses">
                          <p>See all analyses</p>
                        </NavLink>
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
