import React, { Component } from 'react';
import { Card, Image, Item } from 'semantic-ui-react';

const Results = ({ query, results, field }) => {
  if (field == 'Analysis' && results.length > 0) {
    return (
      <Card.Group>
        <h2>Searching Analyses for "{query}"</h2>
        {results.map((result, i) => (
          <Card fluid key={i}>
            <div>
              <Item.Content>
                <Item.Header as="a" href={`/analysis/${result._id}`}>
                  {result.data.header.title}
                </Item.Header>
                {/* <Item.Meta>Author(s):</Item.Meta>
                {result.data.header.author.map((item, itemIndex) => (
                  <Item.Description key={itemIndex}>{item}</Item.Description>
                ))} */}
              </Item.Content>
            </div>
          </Card>
        ))}
      </Card.Group>
    );
  }
  if (field == 'Collection' && results.length > 0) {
    return (
      <Card.Group>
        <h2>Searching Collections for "{query}"</h2>
        {results.map((result, i) => (
          <Card fluid key={i}>
            <div>
              <Item.Content>
                <Item.Header as="a" href={`/collections/${result._id}`}>
                  {result.name}
                </Item.Header>
                <Item.Meta>Studies:</Item.Meta>
                {result.studies.map((item, itemIndex) => (
                  <Item.Description key={itemIndex}>
                    {item.name}
                  </Item.Description>
                ))}
              </Item.Content>
            </div>
          </Card>
        ))}
      </Card.Group>
    );
  }
  if (field == 'User' && results.length > 0) {
    return (
      <Card.Group>
        <h2>Searching Users for "{query}"</h2>
        {results.map((result, i) => (
          <Card fluid key={i}>
            <div>
              <Item.Content>
                <Item.Header>
                  {result.profile.fname} {result.profile.lname}
                </Item.Header>
                <Item.Meta>{result.email}</Item.Meta>
                <Item.Meta>{result.title}</Item.Meta>
                <Item.Meta>{result.organization}</Item.Meta>
                <Item.Description>{result.profile.background}</Item.Description>

                {/* <Item.Meta>Analyses:</Item.Meta>
                {result.analyses.map((item, itemIndex) => (
                  <Item.Description key={itemIndex}>{item}</Item.Description> */}
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
