import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import NavContainer from "containers/Navbar/NavContainer";
import {
  Segment,
  Header,
  Grid,
  Divider,
  Image,
  Card,
  Container,
  Dimmer,
  Loader
} from "semantic-ui-react";
import CollectionModal from "./CollectionModal";
import defaultpicture from "../../../assets/images/default.jpg";

// const faker = require("faker");

class AllCollections extends Component {
  constructor() {
    super();
  }

  // componentWillMount() {
  //   if (!this.props._token) {
  //     console.log(" <---- ALL COLLECTIONS PROPS ----> ", this.props);
  //     window.location.href = "/login";
  //   }
  // }

  render() {

    let { userDataAvailable } = this.props;

    if (!userDataAvailable) {
      return (
        <Dimmer active>
          <Loader content="Loading" />
        </Dimmer>
      );
    } else {
      var collectionCards = this.props.user.collections
        .slice(0)
        .map(collection => {
          return {
            header: (
              <NavLink to={`/collections/${collection._id}`}>
                Title: {collection.name}
              </NavLink>
            ),
            description: `Description: ${collection.description}`
          };
        });

      return (
        <div className="ui  vertical masthead center aligned segment">
          <div className="following bar">
            <div className="ui container">
              {/* <Nav userId="5a74fa36425cf997daab4328" /> */}
              <NavContainer />
            </div>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <Container>
            <Grid>
              {/* header & sub-menu */}
              <Grid.Row>
                {" "}
                <Grid.Column width={3} />
                <Grid.Column width={3}>
                  <Image src={defaultpicture} circular size="small" />
                </Grid.Column>
                <Grid.Column width={8}>
                  <br />

                  <Header as="h1" floated="left" textalign="left">
                    {`${this.props.user.profile.fname} ${
                      this.props.user.profile.lname
                    }`}
                    <Header.Subheader>
                      {" "}
                      {this.props.user.profile.title} at{" "}
                      {this.props.user.profile.organization}
                    </Header.Subheader>
                  </Header>

                  <br />
                </Grid.Column>
              </Grid.Row>

              {/* COLLECTIONS */}
              <Grid.Row id="collections">
                <Grid.Column width={3}>
                  <br />
                  <CollectionModal id={this.props.user._id} />
                </Grid.Column>
                <Grid.Column width={13}>
                  <Segment>
                    {" "}
                    <Header as="h1" textalign="left">
                      All Collections
                    </Header>
                    <Divider />
                    <Card.Group
                      items={
                        collectionCards.length
                          ? collectionCards
                          : [
                              {
                                description: "No current collections"
                              }
                            ]
                      }
                      itemsPerRow={3}
                    />
                    <br />
                  </Segment>
                </Grid.Column>
              </Grid.Row>

              {/* REVIEWS */}
              {/* <Grid.Row>
              <Grid.Column width={3}>
                <br />
                <ReviewModal />
              </Grid.Column>

              <Grid.Column width={13}>
                <Segment>
                  <Header as="h1" textalign="left">
                    Recent Reviews
                  </Header>
                  <Divider />
                  <Card.Group>
                    <Card fluid color="red" header="Option 1" />
                    <Card fluid color="orange" header="Option 2" />
                    <Card fluid color="yellow" header="Option 3" />
                  </Card.Group>
                  <br />
                  <p>See all reviews</p>
                </Segment>
              </Grid.Column>
            </Grid.Row> */}
            </Grid>
          </Container>
        </div>
      );
    }

  }
}

export default AllCollections;
