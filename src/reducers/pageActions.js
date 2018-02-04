import { TOGGLE_BUTTON } from '../constants';

export default function pageActions(state = { state1: true }, action) {
  switch (action.type) {
    case TOGGLE_BUTTON:
      return {
        ...state,
        state1: action.payload,
      };
    default:
      return state;
  }
}
