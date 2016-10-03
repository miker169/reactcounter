/**
 * Created by mike on 02/10/2016.
 */
import { combineReducers } from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';

const todoApp = combineReducers({
  todos,
  visibilityFilter
});

export default todoApp;