import React, { Component } from "react";
import Nav from "../Nav";
import { NavLink } from "react-router-dom";
import {
  Segment,
  Container,
  Header,
  Dimmer,
  Loader,
  Divider,
  Label,
  Card,
  Icon
} from "semantic-ui-react";

class Collection extends Component {
  constructor(props) {
    super(props);
    this.isFetching = true;
  }

  componentWillMount() {
    this.props.getCollection(this.props.match.params.collection_id);
  }

  render() {
    if (!this.props.isFetching) {
      var { Collection } = this.props;

      var tags = this.props.Collection.category.map(el => {
        return <Label>{el.name}</Label>;
      });

      var studies = this.props.Collection.studies.map(study => {
        return {
          header: study.name,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
          meta: study.pubDate
        };
      });
    }

    if (this.props.isFetching) {
      return (
        <Dimmer active>
          <Loader content="Loading" />
        </Dimmer>
      );
    } else {
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
            <br />
            <br />
            <Container>
              <Container>
                <Segment>
                  <h1>
                    {Collection.name}{" "}
                    <span style={{ fontSize: "16px" }}>
                      <NavLink to={`${Collection._id}/edit`}>
                        <Icon name="edit" mini />
                      </NavLink>
                    </span>
                  </h1>

                  {tags.length ? tags : <Label>no tags</Label>}
                  <Divider />
                  <p>{Collection.description}</p>
                </Segment>
                <Segment>
                  <Header as="h2">Included Studies</Header>
                  <Divider />
                  <Card.Group
                    items={
                      studies.length
                        ? studies
                        : [
                            {
                              header: "No selected studies",
                              description: "Click here to add studies."
                            }
                          ]
                    }
                  />
                </Segment>
                <Divider />
              </Container>
            </Container>
          </div>
        </div>
      );
    }
  }
}

export default Collection;
