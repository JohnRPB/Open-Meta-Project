import React, { Component } from "react";
import Nav from "../Nav";
import {
  Segment,
  Grid,
  Button,
  Image,
  Container,
  Popup,
  Header,
  Dimmer,
  Loader,
  Divider,
  Card,
  Label
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
    console.log("analysis props => ", this.props);
    if (!this.props.isFetching) {
      var { Analysis } = this.props;

      // var studies = this.props.Analysis.data.inclusion.collectionId.studies.map(
      //   study => {
      //     return (
      //       <Card
      //         fluid
      //         header={study.name}
      //         description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
      //         meta={study.pubDate}
      //       />
      //     );
      //   }
      // );
    }

    if (this.props.isFetching) {
      return (
        <Dimmer active>
          <Loader content="Loading" />
        </Dimmer>
      );
    } else {
      console.log("single analysis props => ", this.props);
      return (
        <div>
          <div className="ui  vertical masthead center aligned segment">
            <div className="following bar">
              <div className="ui container">
                <Nav />
              </div>
            </div>
            <br />

            <Container>
              {/* <Segment>
                <Header as="h1">Analysis.data.header.title</Header>
                <Divider />
                <Header as="h4">
                  {Analysis.ownerId.profile.fname}{" "}
                  {Analysis.ownerId.profile.lname}
                </Header>
                <Header as="h5">{Analysis.hist[0].time}</Header>
                <Label>category</Label> <Label>category2</Label>{" "}
                <Label>category3</Label>
              </Segment>

              <Header as="h3">Included Studies</Header>
              <Card.Group>{studies}</Card.Group>
              <Divider /> */}
              <p>{JSON.stringify(Analysis.data, null, 5)}</p>
            </Container>
          </div>
        </div>
      );
    }
  }
}

export default Analysis;
