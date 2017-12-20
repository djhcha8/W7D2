import { combineReducers } from 'redux';
import todos from './todos_reducer';
import errors from './error_reducer';
const rootReducer = combineReducers({
  todos,
  errors
});

export default rootReducer;
