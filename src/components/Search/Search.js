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

class Search extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { results, onChange, active, onClick } = this.props;
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
              <div className="ui fluid icon input">
                <input
                  className="prompt"
                  type="text"
                  placeholder="Search..."
                  onChange={e => onChange(e)}
                />
                <i className="search icon" />
              </div>
            </div>
            <div className="Filters">
              <a
                href="#"
                active={active}
                onClick={onClick}
                filter="SHOW_COLLECTIONS"
              >
                Collections
              </a>
              {"  |  "}
              <a
                href="#"
                active={active}
                onClick={onClick}
                filter="SHOW_ANALYSES"
              >
                Analyses
              </a>
              {"  |  "}
              <a
                href="#"
                active={active}
                onClick={onClick}
                filter="SHOW_PEOPLE"
              >
                People
              </a>
              {"  |  "}
              <a href="#" active={active} onClick={onClick} filter="SHOW_PAGES">
                Pages
              </a>
            </div>
            <div className="results">
              <Results results={results} />
            </div>
          </form>
        </Container>
      </div>
    );
  }
}

export default Search;
