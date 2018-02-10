import { TOGGLE_BUTTON } from '../constants';

export default function pageActions(state = { navState: true }, action) {
  switch (action.type) {
    case TOGGLE_BUTTON:
      return {
        ...state,
        navState: action.payload,
      };
    default:
      return state;
  }
}
