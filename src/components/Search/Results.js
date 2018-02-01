import React, { Component } from "react";

const Results = ({ results }) => {
  if (results) {
    return <ul>{results.map((result, i) => <li key={i}>{result}</li>)}</ul>;
  }
  return (
    <div>
      <br />
      <span>No results!</span>
    </div>
  );
};

export default Results;
