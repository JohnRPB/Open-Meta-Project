import React from 'react';
import {Button, Segment, Table} from 'semantic-ui-react';
import colorCycle from 'lib/colorCycle';

const ExistingDisplay = ({existingCollections, onClick}) => {
  let existing = null;
  if (existingCollections.length)
    existing = (
      <Segment.Group>
        <Segment color="blue" textAlign="center">
          <b>Add Existing Collection</b>
        </Segment>
        <Segment style={{overflowX: 'scroll'}}>
          <Table singleLine style={{borderWidth: '0px'}}>
            <Table.Body>
              <Table.Row>
                {existingCollections.map((collection, index) => {
                  let ids = collection.studies.map(study => study.id);
                  let idString = ids.join('_');
                  return (
                    <Table.Cell key={collection._id}>
                      <Button
                        animated="fade"
                        color={colorCycle(index)}
                        id={idString}
                        value={idString}
                        style={{
                          width: '100px',
                          height: '100px',
                          whiteSpace: 'normal',
                        }}
                        onClick={onClick}>
                        <Button.Content value={idString} visible>
                          {collection.name}
                        </Button.Content>
                        <Button.Content hidden id={idString}>
                          Use This Collection
                        </Button.Content>
                      </Button>
                    </Table.Cell>
                  );
                })}
              </Table.Row>
            </Table.Body>
          </Table>
        </Segment>
      </Segment.Group>
    );
  return existing;
};
export default ExistingDisplay;
