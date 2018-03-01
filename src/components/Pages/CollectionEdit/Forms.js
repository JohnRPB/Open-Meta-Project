import React from 'react';
import SearchFormContainer from 'containers/Pages/CollectionEdit/SearchFormContainer';
import SubmitFormContainer from 'containers/Pages/CollectionEdit/SubmitFormContainer';
import {Dimmer, Loader, Menu, Segment} from 'semantic-ui-react';

const Forms = ({activeTab, isFetching, setTab}) => {
  const formTabs = [<SearchFormContainer />, <SubmitFormContainer />];
  const tabTitles = ['Search for Studies', 'Submit Study'];
  return (
    <div>
      <Menu attached="top" tabular>
        {tabTitles.map((title, index) => {
          return (
            <Menu.Item
              active={activeTab === index}
              key={index}
              onClick={() => {
                setTab(index);
              }}
              name={title}
            />
          );
        })}
      </Menu>
      <Segment attached="bottom">
          <Dimmer active={isFetching} inverted>
            <Loader>Loading</Loader>
          </Dimmer>
        {formTabs[activeTab]}
      </Segment>
    </div>
  );
};

export default Forms;
