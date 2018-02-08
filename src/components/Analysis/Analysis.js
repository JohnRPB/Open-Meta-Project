import React, { Component } from "react";
import Nav from "../Nav";
import {
  Segment,
  Container,
  Header,
  Dimmer,
  Loader,
  Divider,
  Label,
  Table
} from "semantic-ui-react";
const moment = require("moment");

class Analysis extends Component {
  constructor(props) {
    super(props);
    this.isFetching = true;
  }

  componentWillMount() {
    this.props.getAnalysis(this.props.match.params.anaysis_id);
  }

  render() {
    if (!this.props.isFetching) {
      var { Analysis } = this.props;

      // creating cards objects for card group
      var studies = Analysis.data.inclusion.collectionId.studies.map(study => {
        return {
          header: study.name,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
          meta: study.pubDate
        };
      });

      // creating rows for option 2
      var rows = Analysis.data.inclusion.collectionId.studies.map(study => {
        return (
          <Table.Row>
            <Table.Cell>{study.name}</Table.Cell>
            <Table.Cell>{study.sampleSize}</Table.Cell>
            <Table.Cell>{study.stdErr}</Table.Cell>
            <Table.Cell>{study.testStatType}</Table.Cell>
            <Table.Cell>{study.testStatVal}</Table.Cell>
            <Table.Cell>
              <a target="_blank" href={study.url}>
                Link
              </a>
            </Table.Cell>
          </Table.Row>
        );
      });

      // creates labels for categories
      var tags = Analysis.data.category.map(el => {
        return <Label>{el.name}</Label>;
      });
    }

    // renders loader if isFetching, otherwise renders component

    if (this.props.isFetching) {
      return (
        <Dimmer active>
          <Loader content="Loading" />
        </Dimmer>
      );
    } else {
      return (
        <div>
          <div className="ui  vertical masthead center aligned segment">
            <div className="following bar">
              <div className="ui container">
                <Nav />
              </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />

            <Container>
              <Segment>
                <Header as="h1">{Analysis.data.header.title}</Header>

                {/* <Header as="h4">
                  {Analysis.ownerId.profile.fname}{" "}
                  {Analysis.ownerId.profile.lname}
                </Header> */}
                {/* <Header as="h5">{Analysis.hist[0].time}</Header> */}
                {tags.length ? tags : <Label>no tags</Label>}
                <Divider />
                <p> by John Doe on date </p>
              </Segment>

              <Segment>
                <Header as="h2">Included Studies</Header>
                <Divider />
                {/* OPTION 1 : CARDS */}
                {/* <Card.Group
                  items={
                    studies.length
                      ? studies
                      : [
                          {
                            description: "No included studies."
                          }
                        ]
                  }
                /> */}
                {/* // OPTION 2 : TABLE */}
                <Table celled striped>
                  <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell>Study</Table.HeaderCell>
                      <Table.HeaderCell>Sample Size</Table.HeaderCell>
                      <Table.HeaderCell>Standard Error</Table.HeaderCell>
                      <Table.HeaderCell>Test Type</Table.HeaderCell>
                      <Table.HeaderCell>Test Value</Table.HeaderCell>
                      <Table.HeaderCell>Link</Table.HeaderCell>
                    </Table.Row>
                  </Table.Header>

                  <Table.Body>{rows}</Table.Body>
                </Table>
              </Segment>

              <Segment>
                <Header as="h2">Blocks</Header>
                <Divider />
              </Segment>
              <Divider />
              <p>{JSON.stringify(Analysis.data, null, 5)}</p>
            </Container>
          </div>
        </div>
      );
    }
  }
}

export default Analysis;
