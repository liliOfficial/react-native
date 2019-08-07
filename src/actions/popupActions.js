import { POPUP_CLOSE, TOAST_MESSAGE } from './types';

export const popupClose = () => {
    return {
        type: POPUP_CLOSE
    }
}

export const toastPopup = (message) => {
    return {
        type: TOAST_MESSAGE,
        payload: message
    }
}