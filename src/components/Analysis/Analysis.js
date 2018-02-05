import React, { Component } from "react";
import Nav from "../Nav";
import {
  Segment,
  Grid,
  Button,
  Image,
  Container,
  Popup,
  Header
} from "semantic-ui-react";

class Analysis extends Component {
  constructor(props) {
    super(props);
    this.isFetching = true;
  }

  componentWillMount() {
    this.props.getAnalysis(this.props.match.params.anaysis_id);
  }

  render() {
    console.log("analysis props => ", this.props);
    if (!this.props.isFetching) {
      var { Analysis } = this.props;
    }

    return (
      <div>
        <div className="ui  vertical masthead center aligned segment">
          <div className="following bar">
            <div className="ui container">
              <Nav />
            </div>
          </div>
          <br />
          <br />
          <br />
          <Container>
            {!this.props.isFetching ? (
              <div>
                <Header as="h1">{Analysis.data.header.title}</Header>
                <Header as="h2"> By {Analysis.data.header.author}</Header>
                <p />
                <p>{JSON.stringify(Analysis.data, null, 5)}</p>
              </div>
            ) : null}
          </Container>
        </div>
      </div>
    );
  }
}

export default Analysis;
