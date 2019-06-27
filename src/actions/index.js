export * from './authActions';
export * from './joinAcitions';
export * from './popupActions';

export const offer = (offerId) => {
    return {
        type: 'offerSelected',
        payLoad: offerId
    }
}