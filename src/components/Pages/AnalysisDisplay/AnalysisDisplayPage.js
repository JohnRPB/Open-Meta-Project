import React, {Component} from "react";
import Nav from "../../Navbar/Nav";
import {NavLink} from "react-router-dom";
import {
  Segment,
  Container,
  Header,
  Dimmer,
  Loader,
  Divider,
  Label,
  Table,
  Icon
} from "semantic-ui-react";
const moment = require("moment");
var _ = require("lodash");

class AnalysisDisplayPage extends Component {
  constructor(props) {
    super(props);
    this.isFetching = true;
  }

  componentWillMount() {
    this.props.getAnalysis(this.props.match.params.anaysis_id);
  }

  render() {
    if (!this.props.isFetching) {
      var {Analysis} = this.props;

      // creating cards objects for card group
      // if (Analysis.data.inclusion.collectionId) {
      //   var studies = Analysis.data.inclusion.collectionId.studies.map(
      //     study => {
      //       return {
      //         header: study.name,
      //         description:
      //           "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      //         meta: study.pubDate
      //       };
      //     }
      //   );
      // }

      // creating rows for option 2
      if (Analysis.data.inclusion.collectionId) {
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
      }

      // creates labels for categories
      var tags = Analysis.data.category.map(el => {
        return <Label>{el.name}</Label>;
      });

      // creating iframes out of blocks
      var blocks = Analysis.data.blocks.map(block => {
        if (block.type === "graph") {
          // console.log(" HIT! => ", block.content.outputLoc);
          return block.type === "graph" ? (
            <iframe
              src={`${block.content.outputLoc}`}
              title={`${block.content.outputLoc}`}
              style={{position:'relative'}}
            />
          ) : (
            <h4>{block.textContent}</h4>);
        } else {
          return null;
        }
      });
      // console.log("blocks => ", blocks);
      _.compact(blocks);
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
                <h1>
                  {Analysis.data.header
                    ? Analysis.data.header.title
                    : "My Analysis"}{" "}
                  {this.props.token ? (
                    <span style={{fontSize: "16px"}}>
                      <NavLink to={`${Analysis._id}/edit`}>
                        <Icon name="edit" mini />
                      </NavLink>
                    </span>
                  ) : null}
                </h1>

                {/* <Header as="h4">
                  {Analysis.ownerId.profile.fname}{" "}
                  {Analysis.ownerId.profile.lname}
                </Header> */}
                {/* <Header as="h5">{Analysis.hist[0].time}</Header> */}
                {tags.length ? tags : <Label>no tags</Label>}
                <Divider />

                {`by ${Analysis.ownerId.profile.fname} ${
                  Analysis.ownerId.profile.lname
                } on ${moment(Analysis.hist[0].time).format("MMMM Do YYYY")} `}
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

                  <Table.Body>
                    {rows ? (
                      rows
                    ) : (
                      <Table.Cell>No selected studies.</Table.Cell>
                    )}
                  </Table.Body>
                </Table>
              </Segment>

              {blocks.length ? (
                <Segment>
                  <Divider />
                  {blocks}
                </Segment>
              ) : null}

              {/* <p>{JSON.stringify(Analysis.data.blocks, null, 5)}</p> */}
            </Container>
          </div>
          <br />
          <br />
          <br />
        </div>
      );
    }
  }
}

export default AnalysisDisplayPage;
