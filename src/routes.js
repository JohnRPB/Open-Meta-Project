import React from "react";

//custom components and containers
import TestCompContainer from "./containers/TestCompContainer";
import About from "./components/About/About";
import UserForm from "./components/Login/UserForm";
import MasterContainer from "./components/Project/MasterContainer";
import Dashboard from "./components/Dashboard/Dashboard";
import Landing from "./components/Landing/Landing.js";

import { BrowserRouter as Router, Route } from "react-router-dom";

const Routes = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={TestCompContainer} />
        <Route exact path="/project" component={MasterContainer} />
        <Route exact path="/login" component={UserForm} />
        <Route exact path="/test" component={TestCompContainer} />
        <Route exact path="/about" component={About} />
<<<<<<< HEAD
        {/* <Route exact path="/rmarkdown" component={Rmarkdown} /> */}
=======
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/landing" component={Landing} />
>>>>>>> 7d2006518ca57248bc958996c90eb6889804c4eb
      </div>
    </Router>
  );
};

export default Routes;
