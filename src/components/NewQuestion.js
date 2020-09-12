import React, { Component } from "react";
import { handleAddQuestion } from "../actions/questions";
import { connect } from "react-redux";

class NewQuestion extends Component {
  state = {
    optionOne: "",
    optionTwo: "",
  };
  handleOptionOne = (e) => {
    e.preventDefault();
    const text = e.target.value;
    this.setState(() => ({
      optionOne: text,
    }));
  };
  handleOptionTwo = (e) => {
    e.preventDefault();
    const text = e.target.value;
    this.setState(() => ({
      optionTwo: text,
    }));
  };
  addQuestion = (e) => {
    const { addNewQuestion } = this.props;
    const { optionOne, optionTwo } = this.state;
    addNewQuestion(optionOne, optionTwo);
    this.setState(() => ({
      optionOne: "",
      optionTwo: "",
    }));
  };
  render() {
    return (
      <div>
        <h3>Would you rather</h3>
        <input
          onChange={this.handleOptionOne}
          value={this.state.optionOne}
          maxLength={100}
        />
        <h4> Or </h4>
        <input
          onChange={this.handleOptionTwo}
          value={this.state.optionTwo}
          maxLength={100}
        />
        <button type="submit" onClick={this.addQuestion}>
          Add Question
        </button>
      </div>
    );
  }
}
function mapStateToProps({ authedUser }) {
  return { authedUser };
}
function mapDispatchToProps(dispatch) {
  return {
    addNewQuestion: (optionOne, optionTwo) => {
      dispatch(handleAddQuestion(optionOne, optionTwo));
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(NewQuestion);
