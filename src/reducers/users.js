import { RECEIVE_USERS } from "../actions/users";
import { ADD_QUESTION, ADD_ANSWER } from "../actions/questions";
export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users,
      };
    case ADD_QUESTION:
      const userId = action.question.author;
      return {
        ...state, // spread the users
        [userId]: {
          // on that particular user we want to change something
          ...state[userId], // but first spread all the properties on that user
          questions: state[userId].questions.concat([action.question.id]), // but the questions we want to change something, add the question we got from action to the questions array
        },
      };
    case ADD_ANSWER:
      const { authedUser, answer, qid } = action;
      return {
        ...state,
        [authedUser]: {
          ...state[authedUser],
          answers: {
            ...state[authedUser].answers,
            [qid]: answer,
          },
        },
      };
    default:
      return state;
  }
}
