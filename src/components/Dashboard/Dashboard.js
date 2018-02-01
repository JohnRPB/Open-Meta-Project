import React, { Component } from "react";
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
import Nav from "../Nav";
import Related from "./Related";
const faker = require("faker");

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.isFetching = true;
  }

  componentWillMount() {
    this.props.getAnalyses("*");
  }

  render() {
    console.log("dashboard props => ", this.props);
    let analysisCards;
    if (!this.props.isFetching) {
      console.log("inside if");
      analysisCards = this.props.DashboardRelated.slice(0, 6).map(analysis => {
        return (
          <Card
            key={analysis._id}
            header={analysis.data.header.title}
            description={faker.lorem.paragraph()}
          />
        );
      });
    }

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
                <Header as="h2">Papers you might be interested in</Header>
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
