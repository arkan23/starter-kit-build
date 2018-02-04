import { combineReducers } from 'redux';
import user from './user';
import runtime from './runtime';
import pageActions from './pageActions';

export default function createRootReducer() {
  return combineReducers({
    user,
    runtime,
    pageActions,
  });
}
