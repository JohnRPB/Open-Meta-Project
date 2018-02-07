import React from 'react';
import ExistingDisplayContainer from '../../containers/CollectionEditor/ExistingDisplayContainer';
import FormsContainer from '../../containers/CollectionEditor/FormsContainer';
import PagesContainer from '../../containers/CollectionEditor/PagesContainer';
import ResultsDisplayContainer from '../../containers/CollectionEditor/ResultsDisplayContainer';

import {Grid} from 'semantic-ui-react';

const CollectionEditor = ({initCollection}) => {
  initCollection();
  return (
    <Grid centered>
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
};

export default CollectionEditor;
