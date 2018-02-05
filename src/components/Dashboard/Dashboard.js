import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import {
  Grid,
  Image,
  Segment,
  Header,
  Container,
  Card,
  Statistic,
  Dimmer,
  Loader
} from "semantic-ui-react";
import Feed from "./Feed";
import NavContainer from "../../containers/NavContainer";
import Related from "./Related";
const faker = require("faker");

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.isFetching = true;
  }

  componentWillMount() {
    this.props.getUser("5a74fa36425cf997daab4328");
    // need to change this query to show related results once tags are set up
    this.props.getAnalyses("*");
    console.log("dashboard props (willmount) => ", this.props);
  }

  render() {
    console.log("dashboard props => ", this.props);
    let analysisCards;

    if (!this.props.isFetching) {
      analysisCards = this.props.DashboardRelated.slice(0, 6).map(analysis => {
        return (
          <Card
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
            <NavContainer />
          </div>
        </div>
        <br />
        <br />
        <Container>
          <Grid columns="equal">
            <Grid.Column width={10}>
              <Feed fluid={true} />
            </Grid.Column>
            <Grid.Column>
              <Card>
                <Card.Content>
                  <Card.Header>Your Activity</Card.Header>
                </Card.Content>
                <Card.Content>
                  <Statistic horizontal label="Reviews" value="41" />
                  <Statistic horizontal label="Papers" value="101" />
                  <Statistic horizontal label="Followers" value="204" />
                </Card.Content>
              </Card>
            </Grid.Column>
          </Grid>
          <br />
          <br />
          <br />
          <Grid>
            {this.props.isFetching ? (
              <Dimmer active>
                <Loader />
              </Dimmer>
            ) : (
              <div>
                <Header as="h2">Analyses you might be interested in</Header>
                <Card.Group>{analysisCards}</Card.Group>
              </div>
            )}
          </Grid>
        </Container>
      </div>
    );
  }
}

export default Dashboard;
