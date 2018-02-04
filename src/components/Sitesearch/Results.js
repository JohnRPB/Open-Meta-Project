import React, { Component } from "react";

const Results = ({ results }) => {
  if (results) {
    return (
      <ul>
        {results.map((result, i) => (
          <li class="ui card" key={i}>
            {result}
          </li>
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
