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
  Label,
  Card
} from "semantic-ui-react";
const moment = require("moment");

class Collection extends Component {
  constructor(props) {
    super(props);
    this.isFetching = true;
  }

  componentWillMount() {
    console.log("URL PARAM => ", this.props);
    this.props.getCollection(this.props.match.params.collection_id);
  }

  render() {
    console.log("Collection props => ", this.props);
    if (!this.props.isFetching) {
      var { Collection } = this.props;

      var studies = this.props.Collection.studies.map(study => {
        return {
          header: study.name,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
          meta: study.pubDate
        };
      });
    }

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
            <Container>
              <Container>
                <Segment>
                  <Header as="h1">{Collection.name}</Header>
                  <Divider />
                  <Header as="h4">
                    {Collection.ownerId.profile.fname}{" "}
                    {Collection.ownerId.profile.lname}
                  </Header>
                  <Header as="h5">
                    {moment(Collection.hist[0].time).format(`MMMM Do YYYY`)}
                  </Header>
                  <Label>category</Label> <Label>category2</Label>{" "}
                  <Label>category3</Label>
                </Segment>

                <Segment>
                  <Header as="h3">Included Studies</Header>
                  <Card.Group items={studies} />
                </Segment>
                <Divider />
              </Container>
            </Container>
          </div>
        </div>
      );
    }
  }
}

export default Collection;
