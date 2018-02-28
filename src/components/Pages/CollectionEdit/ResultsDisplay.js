import React from 'react';
import {
  // Button, 
  Checkbox, 
  Dimmer, 
  Segment, 
  Table
} from 'semantic-ui-react';
import PagesContainer from '../../../containers/Pages/CollectionEdit/PagesContainer';

const ResultsDisplay = ({
  persisted,
  results,
  changeStudyStatus,
  isFetching,
  activePage,
}) => {
  let display = null;
  if (persisted.length || results.length)
    display = (
      <Segment>
        <h3>Studies In Collection</h3>
        <Dimmer active={isFetching} inverted />
        <Table attached="top" celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Use</Table.HeaderCell>
              <Table.HeaderCell>DOI</Table.HeaderCell>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Publication Date</Table.HeaderCell>
              <Table.HeaderCell>Abstract</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {persisted.map((study, index) => {
              return (
                <Table.Row key={study.id}>
                  <Table.Cell>
                    <Checkbox
                      onChange={() => changeStudyStatus(study.id, 0, index)}
                      defaultChecked
                    />
                  </Table.Cell>
                  <Table.Cell>{study.DOI}</Table.Cell>
                  <Table.Cell>{study.name}</Table.Cell>
                  <Table.Cell>{study.pubDate}</Table.Cell>
                  <Table.Cell>
                    <a href={`${study.url}`}>Link</a>
                  </Table.Cell>
                </Table.Row>
              );
            })}
            {results.map((study, index) => {
              return (
                <Table.Row key={study.id}>
                  <Table.Cell>
                    <Checkbox
                      onChange={() =>
                        changeStudyStatus(
                          study.id,
                          1,
                          index + (activePage - 1) * 10,
                        )
                      }
                    />
                  </Table.Cell>
                  <Table.Cell>{study.DOI}</Table.Cell>
                  <Table.Cell>{study.name}</Table.Cell>
                  <Table.Cell>{study.pubDate}</Table.Cell>
                  <Table.Cell>
                    <a href={`${study.url}`}>Link</a>
                  </Table.Cell>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table>
        <PagesContainer />
      </Segment>
    );
  return display;
};

export default ResultsDisplay;
