import React, { Component } from "react";

const Results = ({ results }) => {
  if (results) {
    return (
      <ul>
        {results.map((result, i) => (
          <a className="ui card" key={i}>
            {JSON.stringify(result)}
          </a>
        ))}
      </ul>
    );
  }
  return (
    <div>
      <br />
      <h1>No results!</h1>
    </div>
  );
};

export default Results;
