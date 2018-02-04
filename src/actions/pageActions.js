import { TOGGLE_BUTTON } from '../constants';

export function toggleState(stateValue) {
  return {
    type: TOGGLE_BUTTON,
    payload: !stateValue,
  };
}
