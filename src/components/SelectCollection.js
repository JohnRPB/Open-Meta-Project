//pseudo code to be removed

//saves an analysis

//allows selection of a collection and saves to the analysis the collection
//then give analysis id to edwin

//OR has a button that directs to create a collection page

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';
import root from '../lib/root';
import NavContainer from '../containers/NavContainer';
//ui
import { Container, Button } from 'semantic-ui-react';

//name will change
import CollectionSearchCollectionsContainer from '../containers/SelectCollection/CollectionSearchCollectionsContainer';
import CollectionModal from './MyAnalyses/CollectionModal';

class SelectCollection extends Component {
  constructor() {
    super();
    this.onSubmitSelection = this.onSubmitSelection.bind(this);
  }

  componentDidMount() {
    //saves an analysis
    //hai did this
    console.log('this.props.location.query =>', this.props.location.query);
  }

  onSubmitSelection(e) {
    //allows selection of a collection and saves to the analysis the collection
    //then give analysis id to edwin
    //CurrentAnalysisId
    e.preventDefault();
    // let obj = {
    //   ownerId: this.props.Token.id,
    //   data: {inclusion: {collectionId: this.props._selectedCollection}}
    // };
    // console.log("obj =>", obj);
    // console.log(
    //   "this.props.location.search.splice(4) =>",
    //   this.props.location.search.slice(4)
    // );

    // axios({
    //   method: "PUT",
    //   url: `${root()}/analyses/${this.props.location.search.slice(4)}`,
    //   ownerId: this.props.Token.id,
    //   data: {inclusion: {collectionId: this.props._selectedCollection}}
    // })
    //   .then(response => {
    //     console.log("fetch done in Components/SelectCollection.js");
    //   })
    //   .catch(error => {
    //     console.log("fetch error in Components/SelectCollection.js");
    //   });

    // axios
    //   .post(
    //     `${root()}/analyses/updateanalysis/${this.props.location.search.slice(
    //       4
    //     )}`,
    //     obj
    //   )
    //   .then(response => {
    //     // if(response.ok) {
    //     //   return response.blob();
    //     // }
    //     // throw new Error('Network response was not ok.');
    //     console.log("fetch done in Components/SelectCollection.js");
    // this.props.history.push(`/analysis/${this.props.location.search.slice(4)}/edit`)
      // })
      // .catch(e => {
      //   console.log("fetch error in Components/SelectCollection.js");
      // });

    // fetch({
    //   method: "put",
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   // headers: new Headers({
    //   //   "x-access-token": this.props.Token.token
    //   // }),
    //   body: JSON.stringify(obj)
    // });

    // /updateanalysis/:id/:ownerId/:collectionId

    //this slice is the analysis id
    fetch(
      `${root()}/api/analyses/updateanalysis/${this.props.location.search.slice(
        4
      )}/${this.props.Token.id}/${this.props._selectedCollection}`,
      {
        headers: {
          'Content-Type': 'application/json'
        }
        // headers: new Headers({
        //   "x-access-token": this.props.Token.token
        // }),
      }
    )
      .then(data => {
        // to Edwin
        console.log(
          'fetch works!!!!!! redirecting to the create analysis page'
        );
        this.props.history.push(
          `/analysis/${this.props.location.search.slice(4)}/edit`
        );
      })
      .catch(e => {
        console.log('falcon heavy #3');
      });
  }

  render() {
    console.log('props =>', this.props._selectedCollection);
    return (
      <div>
        <NavContainer />
        <Container>
          <h2 style={{ marginTop: 20, marginBottom: 50 }}>
            Select A Collection For Your Analysis{' '}
          </h2>
          <CollectionSearchCollectionsContainer />

          <h3 style={{ marginTop: 20 }}>
            Your currently selected collection:{' '}
          </h3>
          {!this.props._selectedCollection ? (
            <div>
              <div>none selected yet</div>
              <h3 style={{ marginTop: 20 }}>Create a new collection:</h3>
              <CollectionModal id={this.props.Token.id} />
            </div>
          ) : (
            <div>
              <div>{this.props._selectedCollection}</div>
              <h3 style={{ marginTop: 20 }}>
                Selected a collection? Click here to go on to creating your
                analysis:{' '}
              </h3>
              <Button onClick={this.onSubmitSelection}>
                Create your Analysis
              </Button>
              <h3 style={{ marginTop: 50 }}>Create a new collection:</h3>
              <CollectionModal id={this.props.Token.id} />
            </div>
          )}
        </Container>
      </div>
    );
  }
}

export default SelectCollection;
