import React, {Component} from 'react';
import axios from 'axios';
import {
  Container,
  Divider,
  Dimmer,
  Loader,
} from 'semantic-ui-react';

import PopupPanel from './PopupPanel';
import OutputPanel from './OutputPanel';
import StudyUnit from './StudyUnit';
import StudyInclusionBox from './StudyInclusionBox';
import ControlPanel from './ControlPanel';

// ---------------------------------------------------------
// Loader
// 2018-01-31 22:49
// ---------------------------------------------------------

const LoadingComp = () => (
  <Dimmer active>
    <Loader inverted>Loading</Loader>
  </Dimmer>
);

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
    this.state = {
      imgUrl: 'https://data.library.virginia.edu/files/qreg_fig_1.jpeg',
      postData: {
        x: this.props.collection.map(study => study.stdErr),
        y: this.props.collection.map(study => study.testStatVal),
      },
    };
  }

  _makeRequest = async () => {
    let ocpuModule = `http://johnrpb.ocpu.io/openCPU_test/R/${ this.props.endpoint }`;
    let postR = await axios({
      method: 'post',
      url: ocpuModule,
      data: this.state.postData,
    });
    console.log('------------------- START postR.data -------------------');
    console.log(postR.data);
    console.log('-------------------- END postR.data --------------------');

    let resultArr = postR.data.split('\n');
    let imgAddress = `https://cloud.opencpu.org${resultArr[4]}/png`;
    console.log('imgAddress: ', imgAddress);

    this.setState({
      imgUrl: imgAddress,
    });
  }

  // passed to control panel
  updateRequest = async (newPostData) => {
    this.setState({
      postData: newPostData
    }, this._makeRequest)
  }

  handleClick = async e => {
    await this._makeRequest();
  };

  render() {
    return (
      <Container>
        <PopupPanel
          trigger={
            <OutputPanel
              onClick={this.handleClick}
              imgAddress={this.state.imgUrl}
            />
          }>
          <ControlPanel studies={this.props.collection} updateRequest={this.updateRequest}>
            <StudyInclusionBox />
          </ControlPanel>
        </PopupPanel>
      </Container>
    );
  }
}

export default Module;
