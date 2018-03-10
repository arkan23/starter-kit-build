import { TOGGLE_BUTTON, TOGGLE_MODAL } from '../constants';

export function toggleNavbarDisplay(stateValue) {
    return {
        type: TOGGLE_BUTTON,
        payload: !stateValue,
    };
}
export function toggleModalDisplay(stateValue) {
    return {
        type: TOGGLE_MODAL,
        payload: !stateValue,
    };
}
