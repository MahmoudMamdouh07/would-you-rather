import React, { Component } from "react";
import { connect } from "react-redux";
import { handleAddAnswer } from "../actions/questions";
class QuestionSolution extends Component {
  state = {
    answer: "",
  };
  handleSelectAnswer = (e) => {
    const text = e.target.value;
    this.setState(() => ({
      answer: text,
    }));
  };
  /*
  
        <select onChange={this.handleSelectAnswer}>
          <option defaultValue value="optionOne">
            {question.optionOne.text}
          </option>
          <option value="optionTwo">{question.optionTwo.text}</option>
        </select>
        */
  submitAnswer = (e) => {
    e.preventDefault();
    const { answered } = this.props;
    if (answered === "") {
      const { answer } = this.state;
      this.props.saveQuestionAnswer(answer);
    }
  };
  render() {
    const { question, answered } = this.props;

    return (
      <div>
        <h2>{question.author} asks</h2>
        <h4>Would you rather</h4>
        {answered === "optionOne" ? (
          <div>
            <h6>Your choice</h6>
            <input
              onClick={this.handleSelectAnswer}
              type="radio"
              value="optionOne"
              disabled={answered !== ""}
              id="optionOne"
              checked
            />
            <h6>{question.optionOne.votes.length} votes for that option</h6>
            <h6>
              {(question.optionOne.votes.length /
                (question.optionTwo.votes.length +
                  question.optionOne.votes.length)) *
                100}
              {"% "}
              of people who voted, voted for that option
            </h6>
          </div>
        ) : (
          <div>
            <input
              onClick={this.handleSelectAnswer}
              type="radio"
              value="optionOne"
              disabled={answered !== ""}
              id="optionOne"
            />
            {answered !== "" && (
              <div>
                <h6>{question.optionOne.votes.length} votes for that option</h6>
                <h6>
                  {(question.optionOne.votes.length /
                    (question.optionTwo.votes.length +
                      question.optionOne.votes.length)) *
                    100}
                  {"% "}
                  of people who voted, voted for that option
                </h6>{" "}
              </div>
            )}
          </div>
        )}
        <p>{question.optionOne.text}</p>
        <p>Or</p>
        {answered === "optionTwo" ? (
          <div>
            <h6>Your choice</h6>
            <input
              onClick={this.handleSelectAnswer}
              type="radio"
              value="optionTwo"
              disabled={answered !== ""}
              id="optionTwo"
              checked
            />
            <h6>{question.optionTwo.votes.length} votes for that option</h6>
            <h6>
              {(question.optionTwo.votes.length /
                (question.optionTwo.votes.length +
                  question.optionOne.votes.length)) *
                100}
              {"% "}
              of people who voted, voted for that option
            </h6>
          </div>
        ) : (
          <div>
            <input
              onClick={this.handleSelectAnswer}
              type="radio"
              value="optionTwo"
              disabled={answered !== ""}
              id="optionTwo"
            />
            {answered !== "" && (
              <div>
                <h6>{question.optionTwo.votes.length} votes for that option</h6>
                <h6>
                  {(question.optionTwo.votes.length /
                    (question.optionTwo.votes.length +
                      question.optionOne.votes.length)) *
                    100}
                  {"% "}
                  of people who voted, voted for that option
                </h6>
              </div>
            )}
          </div>
        )}
        <p>{question.optionTwo.text}</p>
        {answered === "" && (
          <button type="submit" onClick={this.submitAnswer}>
            Submit answer
          </button>
        )}
      </div>
    );
  }
}

function mapStateToProps({ questions, authedUser, users }, props) {
  const { qid } = props.match.params;
  const question = questions[qid];
  const user = users[authedUser];
  const answered = user.answers[qid] ? user.answers[qid] : "";
  return { question, user, answered };
}

function mapDispatchToProps(dispatch, props) {
  const { qid } = props.match.params;

  return {
    saveQuestionAnswer: (answer) => {
      dispatch(handleAddAnswer(qid, answer));
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(QuestionSolution);
