import React from 'react';
import ExistingDisplayContainer from 'containers/Pages/CollectionEdit/ExistingDisplayContainer';
import FormsContainer from 'containers/Pages/CollectionEdit/FormsContainer';
// import PagesContainer from 'containers/CollectionEdit/PagesContainer';
import ResultsDisplayContainer from 'containers/Pages/CollectionEdit/ResultsDisplayContainer';
import SaveButtonContainer from 'containers/Pages/CollectionEdit/SaveButtonContainer.js';
import NavContainer from 'containers/Navbar/NavContainer.js';

import {Dimmer, Form, Grid, Loader} from 'semantic-ui-react';

const CollectionEdit = ({initCollection, isFetching, currentCollection}) => {
  let display = null;
  if (!currentCollection) {
    initCollection();
    display = (
      <Grid centered>
        <Grid.Row>
          <Grid.Column width={8}>
            <Dimmer active={isFetching} inverted>
              <Loader>Loading</Loader>
            </Dimmer>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  } else {
    display = (
      <Grid centered>
        <Grid.Row>
          <Grid.Column width={8}>
            <h1>Study Information</h1>
            <Form>
              <Form.Field>
                <label htmlFor="name">Collection Name:</label>
                <input
                  type="text"
                  name="name"
                  placeholder={`${currentCollection.name}`}
                />
              </Form.Field>
              <Form.Field>
                <label htmlFor="description">Description:</label>
                <input
                  type="text"
                  name="description"
                  placeholder={currentCollection.description}
                />
              </Form.Field>
              <SaveButtonContainer />
            </Form>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={8}>
            <h3>Change Studies in Collection</h3>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={8}>
            <ExistingDisplayContainer />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={8}>
            <FormsContainer />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={8}>
            <ResultsDisplayContainer />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
  return (
    <div>
      <NavContainer />
      {display}
    </div>
  );
};

export default CollectionEdit;
