//pseudo code to be removed

//saves an analysis

//allows selection of a collection and saves to the analysis the collection
//then give analysis id to edwin

//OR has a button that directs to create a collection page

import React, {Component} from "react";
import {Link} from "react-router-dom";

//ui
import {Container, Button} from "semantic-ui-react";

//name will change
import CollectionSearchCollectionsContainer from "../containers/Collections/CollectionSearchCollectionsContainer";

class SelectCollection extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    //saves an analysis
    //hai did this
    console.log("this.props.location.query =>", this.props.location.query);
  }

  // const CurrentAnalysisId = sjdlkjsdflkjsdlkfjs

  onSubmitSelection() {
    //allows selection of a collection and saves to the analysis the collection
    //then give analysis id to edwin
    //CurrentAnalysisId
  }

  onSubmitCreateCollection() {
    //OR has a button that directs to create a collection page
  }

  render() {
    return (
      <Container>
        <h3 style={{marginTop: 10}}>Select a collection for your analysis </h3>
        <CollectionSearchCollectionsContainer />
        <h3 style={{marginTop: 10}}>No collections yet?</h3>
        <Button>Create a Collection</Button>
      </Container>
    );
  }
}

export default SelectCollection;
