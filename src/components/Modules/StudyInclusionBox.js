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

  console.log("props: ", props);
  

  return (
     <List divided inverted relaxed>
      {props.studies.map((study, studyIdx) => {
        return (
          <List.Item>
            <List.Header as="a">
              <StudyCheckboxContainer moduleIdx={props.moduleIdx} studyIdx={studyIdx}/>
            </List.Header>
          </List.Item>
        );
      })}
    </List>

  );
}

export default StudyInclusionBox;
