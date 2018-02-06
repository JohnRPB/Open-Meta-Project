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
import ModalForm from "./ModalForm";
import AnalysisModal from "./AnalysisModal";
import ReviewModal from "./ReviewModal";
const faker = require("faker");

class AllCollections extends Component {
  constructor() {
    super();
    this.isFetching = true;
  }

  // componentWillMount() {
  //   if (!this.props._token) {
  //     console.log(" <---- ALL COLLECTIONS PROPS ----> ", this.props);
  //     window.location.href = "/login";
  //   }
  // }

  render() {
    // creating cards from user's analyses
    let analysisCards;
    if (!this.props.isFetching) {
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
                </Segment>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default AllCollections;
