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
    const { results, handleSubmit, onChange, active, onClick } = this.props;

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
          <form>
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
                <button class="ui primary basic button" type="submitAnalyses">
                  Analyses
                  <input name="analyses" value="analyses" type="hidden" />
                </button>

                <button
                  class="ui secondary basic button"
                  type="submitCollection"
                >
                  Collections
                  <input name="collections" value="analyses" type="hidden" />
                </button>

                <button class="ui positive basic button" type="submitUser">
                  People
                  <input name="users" value="analyses" type="hidden" />
                </button>
              </form>
            </div>
            <div className="results">
              <Results results={results} />
            </div>
          </form>
          <GoogleSearch />
        </Container>
      </div>
    );
  }
}

export default Sitesearch;
