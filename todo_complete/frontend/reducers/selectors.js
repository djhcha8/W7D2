export const allTodos = ({ todos }) => {
  return Object.keys(todos).map(id => todos[id]);
};

export const allErrors = ({ errors }) => {
  return errors;
};
