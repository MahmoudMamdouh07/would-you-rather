import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import Dashboard from "./Dashboard";
import Login from "./Login";
import NotFound from "./NotFound";
import Logout from "./Logout";

class Routes extends Component {
  render() {
    return (
      <div className="container">
        <Router>
          <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route exact path="/logout" component={Logout} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default Routes;
