import { POPUP_SUCCESS_SHOW, POPUP_FAIL_SHOW, POPUP_CONFIRM_SHOW, POPUP_CLOSE } from '../actions/types';

const INITIAL_STATE = { popupShow: false, type: '', message: '', };

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case POPUP_SUCCESS_SHOW:
            return { popupShow: true, type: 'success', ...action.payload };
        case POPUP_FAIL_SHOW:
            return { popupShow: true, type: 'fail', ...action.payload };
        case POPUP_CONFIRM_SHOW:            
            return { popupShow: true, type: 'confirm', ...action.payload };
        case POPUP_CLOSE:
            return { ...INITIAL_STATE };
        default:
            return state;
    }
}