import React, { Component } from "react";
import {
  Grid,
  Image,
  Segment,
  Header,
  Container,
  Card,
  Statistic
} from "semantic-ui-react";
import Results from "./Results";
//import Feed from "./Feed";
import Nav from "../Nav";
//import Related from "./Related";
import GoogleSearch from "./GoogleSearch";

class Sitesearch extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      results,
      handleSubmit,
      onChange,
      active,
      onClickCollection,
      onClickUser
    } = this.props;

    return (
      <div className="ui vertical masthead center aligned segment">
        <div className="following bar">
          <div className="ui container">
            <Nav />
          </div>
        </div>
        <br />
        <br />
        <Container>
          <div>
            <div className="ui fluid category search">
              <form
                onSubmit={e => handleSubmit(e)}
                className="ui fluid icon input"
              >
                <input
                  className="prompt"
                  name="query"
                  type="text"
                  placeholder="Search..."
                  //onChange={e => onChange(e)}
                />
                {/* <i type="submit" className="search icon" /> */}
                <button
                  className="ui primary basic button"
                  type="submitAnalyses"
                >
                  Analyses
                </button>

                <button
                  className="ui secondary basic button"
                  onClick={e => handleSubmit(e, "Collection")}
                >
                  Collections
                </button>

                <button
                  onClick={e => handleSubmit(e, "User")}
                  className="ui positive basic button"
                >
                  People
                </button>
              </form>
            </div>
            <div className="results">
              <Results results={results} />
            </div>
          </div>
          <GoogleSearch />
        </Container>
      </div>
    );
  }
}

export default Sitesearch;
