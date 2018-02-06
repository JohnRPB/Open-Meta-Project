import React, {
  Component
} from 'react';
import {
  Grid,
  Header,
  Form,
  Button,
  Table
} from 'semantic-ui-react';
import SearchTableContainer from '../../containers/SearchTableContainer';
import SearchCollectionContainer from '../../containers/SearchCollectionContainer.js';
import SearchFormContainer from '../../containers/SearchFormContainer'

const Search = ({}) => {
  return (
    <div>
      <br />
      <br />
      <Grid divided="vertically" padded>
        <Grid.Row>
          <Grid.Column width={4}>
    </Grid.Column>
    <Grid.Column width={8}>
      <SearchCollectionContainer />
    </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={4}>
          </Grid.Column>
            <SearchFormContainer />
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={4}>
          </Grid.Column>
          <Grid.Column width={8}>
            <SearchTableContainer />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default Search;
