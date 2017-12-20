import { connect } from 'react-redux';
import TodoList from './todo_list';
import {allTodos, allErrors} from '../../reducers/selectors';
import * as todoActions from '../../actions/todo_actions';


const mapStateToProps = (state) => ({
  todos: allTodos(state),
  errors: allErrors(state)
});

const mapDispatchToProps = (dispatch) => ({
  createTodo: (todo) => dispatch(todoActions.createTodo(todo)),
  removeTodo: (todo) => dispatch(todoActions.removeTodo(todo)),
  fetchTodos: () => dispatch(todoActions.fetchTodos()),
  receiveTodo: (todo) => dispatch(todoActions.receiveTodo(todo)),
  updateTodo: (todo) => dispatch(todoActions.updateTodo(todo)),
  deleteTodo: (todo) => dispatch(todoActions.deleteTodo(todo))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
