//pseudo code to be removed

//saves an analysis

//allows selection of a collection and saves to the analysis the collection
//then give analysis id to edwin

//OR has a button that directs to create a collection page

import React, { Component } from "react";
import { Link } from "react-router-dom";

//name will change
import CollectionSearchCollectionsContainer from "../containers/Collections/CollectionSearchCollectionsContainer";

class SelectCollection extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    //saves an analysis
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
      <div>
        <div>Select a collection for your analysis </div>
        <CollectionSearchCollectionsContainer />
        <div>No collections yet?</div>
        <button>Create a Collection</button>
      </div>
    );
  }
}

export default SelectCollection;
