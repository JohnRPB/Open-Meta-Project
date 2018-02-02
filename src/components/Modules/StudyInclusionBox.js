import React, {Component} from 'react';
import {
  List,
} from 'semantic-ui-react';
import StudyUnit from "./StudyUnit";

// Box for included/included studies
const StudyInclusionBox = (props) => {
  return (
    <List divided inverted relaxed>
      {props.studies.map(study => {
        return (
          <List.Item>
            <List.Header as="a">
              <StudyUnit studyLabel={study.name} />
            </List.Header>
          </List.Item>
        );
      })}
    </List>
  );
};

export default StudyInclusionBox;

