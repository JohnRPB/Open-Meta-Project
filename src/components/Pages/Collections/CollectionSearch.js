import React from 'react';
import {
  Grid,
  // Header,
  // Form,
  // Button,
  // Table
} from 'semantic-ui-react';
import CollectionSearchTableContainer from '../../../containers/Collections/CollectionSearchTableContainer';
import CollectionSearchCollectionsContainer from '../../../containers/Collections/CollectionSearchCollectionsContainer.js'
import CollectionSearchFormContainer from '../../../containers/Collections/CollectionSearchFormContainer'

const CollectionSearch = () => {
  return (
    <div>
      <br />
      <br />
      <Grid divided="vertically" padded>
        <Grid.Row>
          <Grid.Column width={4}>
    </Grid.Column>
    <Grid.Column width={8}>
      <CollectionSearchCollectionsContainer />
    </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={4}>
          </Grid.Column>
            <CollectionSearchFormContainer />
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={4}>
          </Grid.Column>
          <Grid.Column width={8}>
            <CollectionSearchTableContainer />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default CollectionSearch;
