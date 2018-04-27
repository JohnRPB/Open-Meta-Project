import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {
  Segment,
  Header,
  Grid,
  Divider,
  Image,
  Card,
  Container,
  Dimmer,
  Loader,
} from 'semantic-ui-react';
import NavContainer from 'containers/Navbar/NavContainer';
import CollectionModal from './CollectionModal';
import AnalysisModal from './AnalysisModal';
import defaultpicture from '../../../assets/images/default.jpg';
const faker = require('faker');

class MyAnalysesPage extends Component {
  componentWillMount() {
    this.props.getUser(this.props._id);
  }

  render() {
    let {userDataAvailable, currentUser} = this.props;

    if (!userDataAvailable) {
      return (
        <Dimmer active>
          <Loader content="Loading" />
        </Dimmer>
      );
    } else {
      // creates cards for each analysis
      let analysisCards = currentUser.analyses.slice(0, 3).map(analysis => {
        return (
          <Card
            fluid
            key={analysis._id}
            header={
              <NavLink to={`/analysis/${analysis._id}`}>
                {/* {analysis._id} */}
                {analysis.data.header.title}
              </NavLink>
            }
            description={faker.lorem.paragraph()}
          />
        );
      });

      // creates cards for each collection
      var collectionCards = currentUser.collections
        .slice(0, 6)
        .map(collection => {
          return {
            header: (
              <NavLink to={`/collections/${collection._id}`}>
                Title: {collection.name}
              </NavLink>
            ),
            description: `Description: ${collection.description}`,
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
                {' '}
                <Grid.Column width={3} />
                <Grid.Column width={3}>
                  <Image src={defaultpicture} circular size="small" />
                </Grid.Column>
                <Grid.Column width={8}>
                  <br />

                  <Header as="h1" floated="left" textalign="left">
                    {`${currentUser.profile.fname} ${
                      currentUser.profile.lname
                    }`}
                    <Header.Subheader>
                      {' '}
                      {currentUser.profile.title} at{' '}
                      {currentUser.profile.organization}
                    </Header.Subheader>
                  </Header>

                  <br />
                </Grid.Column>
              </Grid.Row>

              {/* COLLECTIONS */}
              <Grid.Row id="collections">
                <Grid.Column width={3}>
                  <br />
                  <CollectionModal id={currentUser._id} />
                </Grid.Column>
                <Grid.Column width={13}>
                  <Segment>
                    {' '}
                    <Header as="h1" textalign="left">
                      Recent Collections
                    </Header>
                    <Divider />
                    <Card.Group
                      items={
                        collectionCards.length
                          ? collectionCards
                          : [
                              {
                                description: 'No current collections',
                              },
                            ]
                      }
                      itemsPerRow={3}
                    />
                    <br />
                    <NavLink to="/collections">
                      <p>See all collections</p>
                    </NavLink>
                  </Segment>
                </Grid.Column>
              </Grid.Row>

              {/* ANALYSES */}
              <Grid.Row id="analyses" className="hidden">
                <Grid.Column width={3}>
                  <br />
                  <AnalysisModal id={currentUser._id.toString()} />
                </Grid.Column>

                <Grid.Column width={13}>
                  <Segment>
                    {!userDataAvailable ? (
                      <Dimmer active>
                        <Loader />
                      </Dimmer>
                    ) : (
                      <div>
                        <Header as="h1" textalign="left">
                          Recent Analyses
                        </Header>
                        <Divider />
                        <Card.Group>
                          {analysisCards.length ? (
                            analysisCards
                          ) : (
                            <Card
                              fluid
                              description="No analyses created yet. Would you like to create
                          one now?"
                            />
                          )}
                        </Card.Group>
                        <br />
                        <NavLink to="/analyses">
                          <p>See all analyses</p>
                        </NavLink>
                      </div>
                    )}
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

export default MyAnalysesPage;
