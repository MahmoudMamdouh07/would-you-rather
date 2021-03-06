import { getInitialData } from "../utils/api";
import { receiveUsers } from "../actions/users";
import { receiveQuestions } from "../actions/questions";
import { showLoading, hideLoading } from "react-redux-loading";

export function handleInitialData() {
  return (dispatch, getState) => {
    return getInitialData().then(({ users, questions }) => {
      dispatch(showLoading());
      dispatch(receiveUsers(users));
      dispatch(receiveQuestions(questions));
      dispatch(hideLoading());
    });
  };
}
