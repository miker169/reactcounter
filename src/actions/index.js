/**
 * Created by mike on 02/10/2016.
 */
let nextTodoId = 0;
export const addTodo = (text) => ({
  type: 'ADD_TODO',
  id: (nextTodoId++).toString(),
  text,
});

export const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter,
});

export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id,
});