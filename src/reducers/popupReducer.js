import { POPUP_SHOW, POPUP_CLOSE } from '../actions/types';

const INITIAL_STATE = { popupShow: false, message: '' };

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case POPUP_SHOW:
            return { ...state, popupShow: true, message: action.payload };
        case POPUP_CLOSE:
            return { ...state, ...INITIAL_STATE };
        default:
            return state;
    }
}