import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import "../css/Question.css";

class Question extends Component {
  render() {
    const { authedUser, question, author } = this.props;
    const qid = question.id;
    return (
      <Link to={`/questions/${qid}`} className="question">
        <img
          className="question-image"
          src={author.avatarURL}
          alt={`belongs to ${author.name}`}
          height="50"
          width="50"
        />
        <h2>{author.name} asks</h2>
        <h4>would you rather </h4>
        <h6>{question.optionOne.text} or .....</h6>
      </Link>
    );
  }
}

function mapStateToProps({ questions, users, authedUser }, { qid }) {
  const question = questions[qid];
  const author = users[question.author];
  return { authedUser, question, author };
}
export default withRouter(connect(mapStateToProps)(Question));
