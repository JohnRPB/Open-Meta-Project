import React, { Component } from "react";
import {
  Grid,
  Image,
  Segment,
  Header,
  Container,
  Card,
  Statistic
} from "semantic-ui-react";
import Feed from "./Feed";
import Nav from "../Nav";
import Related from "./Related";

class Dashboard extends Component {
  componentWillMount() {
    this.props.getAnalyses("*");
  }

  render() {
    console.log("dashboard props => ", this.props);
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
            <Header as="h2">Papers you might be interested in</Header>
            <Related />
          </Grid>
        </Container>
      </div>
    );
  }
}

export default Dashboard;
