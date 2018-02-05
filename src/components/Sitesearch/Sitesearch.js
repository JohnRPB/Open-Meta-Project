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
import NavContainer from "../../containers/NavContainer";
//import Related from "./Related";
import GoogleSearch from "./GoogleSearch";

class Sitesearch extends Component {
  constructor(props) {
    super(props);
  }

  // console.log("QUERY IS", this.props.location.search.slice(7));
  // if (this.props.location.search.slice(7)) {
  //   this.props.query = this.props.location.search.slice(7);
  // }
  render() {
    const {
      results,
      handleSubmit,
      onChange,
      field,
      onClickCollection,
      onClickUser,
      query
    } = this.props;

    return (
      <div className="ui vertical masthead center aligned segment">
        <div className="following bar">
          <div className="ui container">
            <NavContainer />
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
                  defaultValue={this.props.location.search.slice(7)}
                />

                <button className="ui primary basic button">Analyses</button>
              </form>

              <form
                onSubmit={e => handleSubmit(e, "Collection")}
                className="ui fluid icon input"
              >
                <input
                  className="prompt"
                  name="query"
                  type="text"
                  placeholder="Search..."
                  defaultValue={this.props.location.search.slice(7)}
                />

                <button
                  className="ui secondary basic button"
                  //  onClick={e => handleSubmit(e, "Collection")}
                >
                  Collections
                </button>
              </form>

              <form
                onSubmit={e => handleSubmit(e, "User")}
                className="ui fluid icon input"
              >
                <input
                  className="prompt"
                  name="query"
                  type="text"
                  placeholder="Search..."
                  defaultValue={this.props.location.search.slice(7)}
                />

                <button
                  //  onClick={e => handleSubmit(e, "User")}
                  className="ui positive basic button"
                >
                  People
                </button>
              </form>
            </div>
            <div className="results">
              <Results query={query} results={results} field={field} />
            </div>
          </div>

          <h3>Or, search OpenMeta's webpages:</h3>
          <GoogleSearch />
        </Container>
      </div>
    );
  }
}

export default Sitesearch;
