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
const moment = require("moment");

class Profile extends Component {
  constructor(props) {
    super(props);
    this.isFetching = true;
  }

  componentWillMount() {
    this.props.getUser(this.props.match.params.user_id);
  }

  render() {
    if (!this.props.isFetching) {
      var { User, isFetching } = this.props;
      console.log("deconstructed User", User);
    }

    console.log("props => ", this.props);
    // setting analyses content after fetching
    // if (!this.props.isFetching) {
    //   console.log("profile props inside FETCHING => ", this.props);
    //   console.log("profile/user => ", User);
    //   var analysisRows = this.props.Analyses.slice(0, 10).map(analysis => {
    //     return (
    //       <Table.Row>
    //         <Table.Cell>{analysis.data.header.title}</Table.Cell>
    //         <Table.Cell collapsing textAlign="right">
    //           10 hours ago
    //         </Table.Cell>
    //       </Table.Row>
    //     );
    //   });
    // }

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
          <Grid>
            <Grid.Column width={1} />

            <Grid.Column width={14}>
              <Segment>
                {/* create middleware to make pictures perfectly square? */}
                <Image
                  src={!this.props.isFetching ? `${User.profile.image}` : null}
                  centered
                  circular="true"
                  size="small"
                />
                <h2>
                  {!this.props.isFetching
                    ? `${User.profile.f_name} ${User.profile.l_name}`
                    : null}
                </h2>
                <h3> {!this.props.isFetching ? User.profile.title : null}</h3>
                <p>
                  {!this.props.isFetching ? User.profile.description : null}
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
                    <Statistic.Value>
                      {!this.props.isFetching
                        ? `${User.analyses.length}`
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
                        ? `${this.props.User.profile.f_name}'s Analyses`
                        : null}
                    </Table.HeaderCell>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  {!this.props.isFetching
                    ? User.analyses.map(analyses => {
                        return (
                          <Table.Row>
                            <Table.Cell>
                              {analyses.data.header.title}
                            </Table.Cell>
                            <Table.Cell collapsing textAlign="right">
                              {moment(analyses.hist[0].time).format(
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
