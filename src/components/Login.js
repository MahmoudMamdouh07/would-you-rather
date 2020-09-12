import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { setAuthedUser } from "../actions/authedUser";
class Login extends Component {
  state = {
    userId: "",
    toHome: false,
  };
  handleSelectUser = (e) => {
    e.preventDefault();
    const authedUser = e.target.value;
    this.setState(() => ({
      userId: authedUser,
    }));
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { userId } = this.state;
    if (userId !== "") {
      const { authenticate } = this.props;
      authenticate(userId);
      this.setState(() => ({
        toHome: true,
      }));
    }
  };
  render() {
    const { users } = this.props;

    if (this.state.toHome === true) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <h3>Login to continue</h3>
        <select onChange={this.handleSelectUser}>
          <option value="" defaultValue>
            Select User
          </option>
          {Object.keys(users).map((user) => (
            <option key={user} value={user}>
              {users[user].name}
            </option>
          ))}
        </select>
        <button onClick={this.handleSubmit} name="submit">
          Login
        </button>
      </div>
    );
  }
}
function mapStateToProps({ users }) {
  return { users };
}
function mapDispatchToProps(dispatch) {
  return {
    authenticate: (id) => {
      dispatch(setAuthedUser(id));
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);
