import React, { Component } from "react";
import { connect } from "react-redux";
import Question from "./Question";

class Dashboard extends Component {
  state = {
    selection: "",
  };
  handleSelection = (e) => {
    const text = e.target.value;
    this.setState(() => ({
      selection: text,
    }));
  };
  render() {
    const { selection } = this.state;
    const { unansweredQuestions, answeredQuestions } = this.props;
    return (
      <div>
        <select onChange={this.handleSelection}>
          <option defaultValue value="unanswered">
            Unanswered
          </option>
          <option value="answered">answered</option>
        </select>
        <div className="selected-option">
          <ul>
            {selection === "answered"
              ? answeredQuestions.map((qid) => <Question qid={qid} />)
              : unansweredQuestions.map((qid) => <Question qid={qid} />)}
          </ul>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ questions, users, authedUser }) {
  const user = users[authedUser];
  const answeredQuestions = Object.keys(user.answers).sort(
    (a, b) => questions[b].timestamp - questions[a].timestamp
  );
  const unansweredQuestions = Object.keys(questions)
    .filter((qid) => !answeredQuestions.includes(qid))
    .sort((a, b) => questions[b].timestamp - questions[a].timestamp);
  return {
    unansweredQuestions,
    answeredQuestions,
  };
}
export default connect(mapStateToProps)(Dashboard);
