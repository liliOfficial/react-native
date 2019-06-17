import { EMAIL_CHANGED } from './types';
export const offer = (offerId) => {
    return {
        type: 'offerSelected',
        payLoad: offerId
    }
}

export const emailChanged = (text) => {
    return {
        type: 'EMAIL_CHANGED',
        payload: text
    }
}