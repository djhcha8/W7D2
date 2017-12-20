import { CLEAR_ERRORS, RECEIVE_ERRORS } from '../actions/error_actions';

const errorsReducer = (state = [], action) => {
  let newState = [];
  switch (action.type) {
    case RECEIVE_ERRORS:
      newState = action.errors;
      return newState;
    case CLEAR_ERRORS:
      return newState;
    default:
      return state;
  }
};

export default errorsReducer;
