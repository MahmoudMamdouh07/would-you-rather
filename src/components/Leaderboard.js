import React, { Component } from "react";
import { connect } from "react-redux";
import "../css/Leaderboard.css";

class Leaderboard extends Component {
  render() {
    const { users, orderedUsers } = this.props;
    return (
      <ul className="leaderboard">
        {orderedUsers.map((user) => (
          <li className="leaderboard-user" key={user}>
            <img className="leaderboard-image" src={users[user].avatarURL} />
            <h3 className="leaderboard-user-name">{users[user].name}</h3>
            <h3 id="questions-score" className="score">
              Questions: {users[user].questions.length}
            </h3>
            <h3 id="answers-score" className="score">
              Answers: {Object.keys(users[user].answers).length}
            </h3>
            <div className="total-score">
              <h3>
                Score{" "}
                {users[user].questions.length +
                  Object.keys(users[user].answers).length}
              </h3>
            </div>
          </li>
        ))}
      </ul>
    );
  }
}

function mapStateToProps({ users }) {
  const orderedUsers = Object.keys(users).sort(
    (a, b) =>
      users[b].questions.length +
      Object.keys(users[b].answers).length -
      (users[a].questions.length + Object.keys(users[a].answers).length)
  );
  return { orderedUsers, users };
}

export default connect(mapStateToProps)(Leaderboard);
