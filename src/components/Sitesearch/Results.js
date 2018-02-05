import React, { Component } from "react";
import { Card, Image, Item } from "semantic-ui-react";

const Results = ({ query, results, field }) => {
  if (field == "Analysis" && results.length > 0) {
    return (
      <Card.Group>
        <h2>Searching Analyses for "{query}"</h2>
        {results.map((result, i) => (
          <Card fluid key={i}>
            <div>
              <Item.Content>
                <Item.Header as="a">
                  Title: {result.data.header.title}
                </Item.Header>
                <Item.Meta>Author(s):</Item.Meta>
                {result.data.header.author.map((item, itemIndex) => (
                  <Item.Description key={itemIndex}>{item}</Item.Description>
                ))}
              </Item.Content>
            </div>
          </Card>
        ))}
      </Card.Group>
    );
  }
  if (field == "Collection" && results.length > 0) {
    return (
      <Card.Group>
        <h2>Searching Collections for "{query}"</h2>
        {results.map((result, i) => (
          <Card fluid key={i}>
            <div>
              <Item.Content>
                <Item.Header as="a">Title: {result.name}</Item.Header>
                <Item.Meta>Studies:</Item.Meta>
                {result.studies.map((item, itemIndex) => (
                  <Item.Description key={itemIndex}>{item}</Item.Description>
                ))}
              </Item.Content>
            </div>
          </Card>
        ))}
      </Card.Group>
    );
  }
  if (field == "User" && results.length > 0) {
    return (
      <Card.Group>
        <h2>Searching Users for "{query}"</h2>
        {results.map((result, i) => (
          <Card fluid key={i}>
            <div>
              <Item.Content>
                <Item.Header as="a">Email: {result.email}</Item.Header>
                <Item.Meta>Analyses:</Item.Meta>
                {result.analyses.map((item, itemIndex) => (
                  <Item.Description key={itemIndex}>{item}</Item.Description>
                ))}
              </Item.Content>
            </div>
          </Card>
        ))}
      </Card.Group>
    );
  }
  return (
    <div>
      <h2>Sorry! No results found for "{query}". Consider changing keywords</h2>
    </div>
  );
};

export default Results;
