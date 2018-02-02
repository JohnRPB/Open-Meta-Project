import React, { Component } from "react";
import Nav from "../Nav";
import {
  Segment,
  Grid,
  Image,
  Container,
  Statistic,
  Dimmer,
  Loader,
  Table
} from "semantic-ui-react";
import johann from "../../assets/images/johann.jpeg";
import AnalysesTable from "./Table";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.isFetching = true;
  }

  componentWillMount() {
    this.props.getUser(this.props.match.params.user_id);
    this.props.getAnalyses("*");
  }

  render() {
    // get profile picture
    // classN
    // description
    // title
    // # of papers, forks, reviews & followers
    // current analyses

    // if (!this.props.isFetching) {
    //   let { Name, Title, Description, Image } = this.props.Profile;
    // }

    // setting analyses content after fetching
    if (!this.props.isFetching) {
      console.log("profile props => ", this.props);
      var analysisRows = this.props.Analyses.slice(0, 10).map(analysis => {
        return (
          <Table.Row>
            <Table.Cell>{analysis.data.header.title}</Table.Cell>
            <Table.Cell collapsing textAlign="right">
              10 hours ago
            </Table.Cell>
          </Table.Row>
        );
      });
    }

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
            <Grid.Column width={1} />

            <Grid.Column width={14}>
              <Segment>
                <Image src={johann} centered circular="true" size="small" />
                <h2>Johann Baptista</h2>
                <h3>Web Developer, Data Scientist, Swing Dancer</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </Segment>

              <Segment>
                {" "}
                <Statistic.Group widths="four">
                  <Statistic>
                    <Statistic.Value>52</Statistic.Value>
                    <Statistic.Label>Papers</Statistic.Label>
                  </Statistic>

                  <Statistic>
                    <Statistic.Value>41</Statistic.Value>
                    <Statistic.Label>Forks</Statistic.Label>
                  </Statistic>

                  <Statistic>
                    <Statistic.Value>15</Statistic.Value>
                    <Statistic.Label>Reviews</Statistic.Label>
                  </Statistic>

                  <Statistic>
                    <Statistic.Value>42</Statistic.Value>
                    <Statistic.Label>Followers</Statistic.Label>
                  </Statistic>
                </Statistic.Group>
              </Segment>

              <Table celled striped>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell colSpan="3">
                      Johann's Analyses
                    </Table.HeaderCell>
                  </Table.Row>
                </Table.Header>

                <Table.Body>{analysisRows}</Table.Body>
              </Table>
            </Grid.Column>
            <Grid.Column width={1} />
          </Grid>
        </Container>
      </div>
    );
  }
}

export default Profile;
