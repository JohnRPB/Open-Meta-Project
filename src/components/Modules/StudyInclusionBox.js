import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Link,
  Switch,
} from 'react-router-dom'
import {
  List,
} from 'semantic-ui-react';
import StudyCheckboxContainer from "../../containers/Modules/StudyCheckboxContainer";

const StudyInclusionBox = (props) => {

  let studyIds = [];
  for (let key in props.studies) {
    studyIds.push(key)
  }

  return (
     <List divided inverted relaxed>
      {studyIds.map(studyId => {
        return (
          <List.Item>
            <List.Header as="a">
              <StudyCheckboxContainer moduleIdx={props.moduleIdx} studyId={studyId}/>
            </List.Header>
          </List.Item>
        );
      })}
    </List>

  );
}

export default StudyInclusionBox;
