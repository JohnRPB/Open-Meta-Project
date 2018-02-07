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
    this.onSubmitSelection = this.onSubmitSelection.bind(this);
  }

  componentDidMount() {
    //saves an analysis
    //hai did this
    console.log("this.props.location.query =>", this.props.location.query);
  }

  onSubmitSelection(e) {
    //allows selection of a collection and saves to the analysis the collection
    //then give analysis id to edwin
    //CurrentAnalysisId
    e.preventDefault();
    let obj = {
      data: {inclusion: {collectionId: this.props._selectedCollection}}
    };
    console.log("obj =>", obj);
    console.log(
      "this.props.location.search.splice(4) =>",
      this.props.location.search.slice(4)
    );

    fetch(
      `http://localhost:8000/analyses/${this.props.location.search.slice(4)}`,
      {
        method: "put",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(obj)
      }
    )
      .then(response => {
        // if(response.ok) {
        //   return response.blob();
        // }
        // throw new Error('Network response was not ok.');
        console.log("fetch done in Components/SelectCollection.js");
        //this.props.history.push this.props.history.push("/myanalyses/:id")
      })
      .catch(e => {
        console.log("fetch error in Components/SelectCollection.js");
      });
  }

  render() {
    console.log("props =>", this.props._selectedCollection);
    return (
      <Container>
        <h3 style={{marginTop: 10}}>Select a collection for your analysis </h3>
        <CollectionSearchCollectionsContainer />

        <h3 style={{marginTop: 10}}>Your currently selected collection: </h3>
        {!this.props._selectedCollection ? (
          <div>
            <div>none selected yet</div>
            <h3 style={{marginTop: 10}}>No collections yet?</h3>
            <Button>Create a Collection</Button>
          </div>
        ) : (
          <div>
            <div>{this.props._selectedCollection}</div>
            <h3 style={{marginTop: 10}}>
              Selected a collection? Click here to go on to creating your
              analysis:{" "}
            </h3>
            <Button onClick={this.onSubmitSelection}>
              Create your Analysis
            </Button>
          </div>
        )}
      </Container>
    );
  }
}

export default SelectCollection;
