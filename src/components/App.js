import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import { handleInitialData } from "../actions/shared";
import Nav from "./Nav";
import Dashboard from "./Dashboard";
import Login from "./Login";
import NotFound from "./NotFound";
import Logout from "./Logout";
import NewQuestion from "./NewQuestion";
import QuestionSolution from "./QuestionSolution";
import Leaderboard from "./Leaderboard";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

class App extends Component {
  componentDidMount() {
    this.props.handleInitialData();
  }
  render() {
    const { notAuthorized } = this.props;
    console.log("authenticated: ", !notAuthorized);
    return (
      <Router>
        <Fragment>
          {notAuthorized ? (
            <Route path="/" component={Login} />
          ) : (
            <Fragment>
              <Nav />
              <Switch>
                <Route path="/" exact component={Dashboard} />
                <Route exact path="/logout" component={Logout} />
                <Route path="/new" component={NewQuestion} />
                <Route path="/leaderboard" component={Leaderboard} />
                <Route path="/questions/:qid" component={QuestionSolution} />
                <Route component={NotFound} />
              </Switch>
            </Fragment>
          )}
        </Fragment>
      </Router>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    notAuthorized: authedUser ? Object.keys(authedUser).length === 0 : true,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    handleInitialData: () => {
      dispatch(handleInitialData());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
