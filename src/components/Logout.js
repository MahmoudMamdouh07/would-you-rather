import React, { Component } from "react";
import { connect } from "react-redux";
import { unsetAuthedUser } from "../actions/authedUser";
import { Redirect } from "react-router-dom";

class Logout extends Component {
  componentWillMount() {
    this.props.loggedOut();
  }
  render() {
    return <Redirect to="/" />;
  }
}
function mapDispatchToProps(dispatch) {
  return {
    loggedOut: () => {
      dispatch(unsetAuthedUser());
    },
  };
}
export default connect(mapDispatchToProps)(Logout);
