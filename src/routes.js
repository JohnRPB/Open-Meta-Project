import React from 'react';
import TestCompContainer from './containers/TestCompContainer';
import About from './components/About/About';

import { BrowserRouter as Router, Route } from 'react-router-dom';

const Routes = () => {
  return (
    <Router>
      <div>
        <Route exact path="/test" component={TestCompContainer} />
        <Route exact path="/about" component={About} />
      </div>
    </Router>
  )
};

export default Routes;
