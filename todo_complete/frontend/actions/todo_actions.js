export const RECEIVE_TODOS = 'RECEIVE_TODOS';
export const RECEIVE_TODO = 'RECEIVE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
import { receiveErrors } from './error_actions';
import * as TodoApiUtil from '../../util/todo_api_util';


export const receiveTodos = (todos) => {
  return {
    type: RECEIVE_TODOS,
    todos
  };
};

export const receiveTodo = (todo) => {
    return {
      type: RECEIVE_TODO,
      todo
    };
};

export const removeTodo = (todo) => {
  return {
    type: REMOVE_TODO,
    todo
  };
};

export const fetchTodos = () => (dispatch) => {
  return TodoApiUtil.fetchTodos().then((todos) => {
    return dispatch(receiveTodos(todos));
  });
};

export const createTodo = (todo) => (dispatch) => {
  return TodoApiUtil.createTodo(todo).then(
    (todo) => dispatch(receiveTodo(todo)),
    (err) => dispatch(receiveErrors(err.responseJSON))
  );
};

export const updateTodo = (todo) => (dispatch) => {
  return TodoApiUtil.updateTodo(todo).then(
    (todo) => dispatch(receiveTodo(todo)),
    (err) => dispatch(receiveErrors(err.responseJSON))
  );
};

export const deleteTodo = (todo) => (dispatch) => {
  return TodoApiUtil.deleteTodo(todo).then(
    (todos) => dispatch(receiveTodos(todos))
  );
};
