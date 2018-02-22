import { TOGGLE_BUTTON, TOGGLE_MODAL } from '../constants';

export default function pageActions(
  state = { navState: false, modalState: false },
  action,
) {
  switch (action.type) {
    case TOGGLE_BUTTON:
      return {
        ...state,
        navState: action.payload,
      };
    case TOGGLE_MODAL:
      return {
        ...state,
        modalState: action.payload,
      };
    default:
      return state;
  }
}
