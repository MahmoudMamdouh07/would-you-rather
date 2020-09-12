import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import "../css/Nav.css";

class Nav extends Component {
  render() {
    return (
      <nav className="nav">
        <ul>
          <li>
            <NavLink to="/" exact activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/new" exact activeClassName="active">
              New Tweet
            </NavLink>
          </li>
          <li>
            <NavLink to="/leaderboard" exact activeClassName="active">
              leaderboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/logout" exact activeClassName="active">
              Hello {this.props.user.name}
            </NavLink>
          </li>
          <li>
            <NavLink to="/logout" exact activeClassName="active">
              Logout
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}

function mapStateToProps({ authedUser, users }) {
  return {
    user: users[authedUser],
  };
}
export default connect(mapStateToProps)(Nav);
