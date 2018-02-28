import React from 'react';
// import axios from "axios";
import {
  Container, 
  Button
} from 'semantic-ui-react';

import PopupPanel from './PopupPanel';
import ControlPanel from './ControlPanel';

import OutputPanelContainer from '../../containers/Modules/OutputPanelContainer';
import StudyInclusionBoxContainer from '../../containers/Modules/StudyInclusionBoxContainer';

// ---------------------------------------------------------
// Top-level Module
// 2018-01-31 22:51
// ---------------------------------------------------------
// Wraps output and provides interface for popup panel
// controls to modify output through api call

class Module extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  componentDidMount() {
    this.props.getOcpu();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.moduleIdx !== this.props.moduleIdx) {
      this.props.getOcpu();
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.moduleIdx !== nextProps.moduleIdx) {
      this.props.getOcpu();
    }
  }

  render() {

    return (
      <Container>
        <PopupPanel trigger={<Button>+</Button>}>
          <ControlPanel moduleIdx={this.props.moduleIdx}>
            <StudyInclusionBoxContainer moduleIdx={this.props.moduleIdx} />
          </ControlPanel>
        </PopupPanel>
        <OutputPanelContainer moduleIdx={this.props.moduleIdx} />
      </Container>
    );
  }
}

export default Module;
