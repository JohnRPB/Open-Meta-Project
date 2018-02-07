import React, { Component } from "react";
import NavContainer from "../../containers/NavContainer";
import { NavLink } from "react-router-dom";
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
const moment = require("moment");

class Profile extends Component {
  constructor() {
    super();
    this.isFetching = true;
  }

  componentWillMount() {
    if (!this.props._token) {
      this.props.history.push("/login");
    }
  }

  render() {
    // if (!this.props.isFetching) {
    //   var { User } = this.props.MyAnalysesPage;
    //   console.log("user => ", User);
    // }
    console.log("PROFILE PAGE props => ", this.props);

    return (
      <div class="ui  vertical masthead center aligned segment">
        <div class="following bar">
          <div class="ui container">
            <NavContainer />
          </div>
        </div>
        <br />
        <Container>
          <Grid>
            <Grid.Column width={1} />

            <Grid.Column width={14}>
              <Segment>
                {/* create middleware to make pictures perfectly square? */}
                <Image
                  src={
                    !this.props.isFetching
                      ? `${this.props.MyAnalysesPage.user.profile.image}`
                      : null
                  }
                  centered
                  circular="true"
                  size="small"
                />
                <h2>
                  {!this.props.isFetching
                    ? `${this.props.MyAnalysesPage.user.profile.fname} ${
                        this.props.MyAnalysesPage.user.profile.lname
                      }`
                    : null}
                </h2>
                <h3>
                  {" "}
                  {!this.props.isFetching
                    ? this.props.MyAnalysesPage.user.profile.title
                    : null}
                </h3>
                <p>
                  {!this.props.isFetching
                    ? this.props.MyAnalysesPage.user.profile.background
                    : null}
                </p>
              </Segment>

              <Segment>
                {" "}
                <Statistic.Group widths="four">
                  <Statistic>
                    <Statistic.Value>52</Statistic.Value>
                    <Statistic.Label>Reviews</Statistic.Label>
                  </Statistic>

                  <Statistic>
                    <Statistic.Value>41</Statistic.Value>
                    <Statistic.Label>Forks</Statistic.Label>
                  </Statistic>

                  <Statistic>
                    <Statistic.Value>
                      {!this.props.isFetching
                        ? `${this.props.MyAnalysesPage.user.analyses.length}`
                        : null}
                    </Statistic.Value>
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
                      {!this.props.isFetching
                        ? `${
                            this.props.MyAnalysesPage.user.profile.fname
                          }'s Analyses`
                        : null}
                    </Table.HeaderCell>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  {!this.props.isFetching
                    ? this.props.MyAnalysesPage.user.analyses.map(analysis => {
                        return (
                          <Table.Row>
                            <Table.Cell>
                              <NavLink to={`/analysis/${analysis._id}`}>
                                {analysis.data.header.title}
                              </NavLink>
                            </Table.Cell>
                            <Table.Cell collapsing textAlign="right">
                              {moment(analysis.hist[0].time).format(
                                `MMMM Do YYYY`
                              )}
                            </Table.Cell>
                          </Table.Row>
                        );
                      })
                    : null}
                </Table.Body>
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
